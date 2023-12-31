/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import mongoose, { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { adminSearchableFields } from './admin.constant';
import { IAdmin, IAdminFilters } from './admin.interface';
import { Admin } from './admin.model';
import bcrypt from 'bcrypt';
import config from '../../../config';

const insertIntoDB = async (data: IAdmin): Promise<IAdmin> => {
  const { password } = data;
  let default_pass;
  if (!password) {
    default_pass = config.default_admin_pass as string;
  }
  // password hash here
  const hashPassword = await bcrypt.hash(
    password ? password : (default_pass as string),
    Number(config.bycrypt_salt_rounds)
  );
  data['password'] = hashPassword;
  data['role'] = 'admin';
  data['change_password'] = true;
  data['status'] = 'active';

  const result = (await Admin.create(data)).populate('colony');
  return result;
};

const getSingleAdmin = async (id: string): Promise<IAdmin | null> => {
  const result = await Admin.findOne({ _id: id }).populate('colony');
  return result;
};

const getAllAdmins = async (
  filters: IAdminFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAdmin[]>> => {
  // Extract searchTerm to implement search query
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: adminSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // Filters needs $and to fullfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // Dynamic sort needs  fields to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // If there is no condition , put {} to give all data
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Admin.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
    .populate('colony');

  const total = await Admin.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const updateAdmin = async (
  id: string,
  payload: Partial<IAdmin>
): Promise<IAdmin | null> => {
  const isExist = await Admin.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Admin not found!');
  }

  const { ...adminData } = payload;

  const filters = { _id: id };
  const updatedStudentData: Partial<IAdmin> = { ...adminData };
  const options = { new: true };

  const result = await Admin.findOneAndUpdate(
    filters,
    updatedStudentData,
    options
  ).populate('colony');
  return result;
};

const deleteAdmin = async (id: string): Promise<IAdmin | null> => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // check if the Admin exists
    const isExist = await Admin.findOne({ _id: id });

    if (!isExist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Admin not found!');
    }

    // delete Admin first
    const admin = await Admin.findOneAndDelete(
      { _id: id },
      { session }
    ).populate('colony');

    if (!admin) {
      throw new ApiError(404, 'Failed to delete Admin');
    }

    // Commit the transaction after all operations are successful
    await session.commitTransaction();
    return admin;
  } catch (error) {
    // If there is an error, abort the transaction
    await session.abortTransaction();
    throw error;
  } finally {
    // Finally, end the session
    session.endSession();
  }
};

export const AdminService = {
  insertIntoDB,
  getSingleAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
};
