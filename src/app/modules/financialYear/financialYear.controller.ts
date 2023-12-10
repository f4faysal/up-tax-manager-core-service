import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { FinancialYearService } from './financialYear.service';
import { IFinancialYear } from './financialYear.interface';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FinancialYearService.insertIntoDB();
  sendResponse<IFinancialYear>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Create Succssfully!',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await FinancialYearService.getAllData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});
const dueYearData = catchAsync(async (req: Request, res: Response) => {
  const {homeId} = req.params;
  const result = await FinancialYearService.dueYearData(homeId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Due Years Retrived Succssfully!',
    data: result,
  });
});

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FinancialYearService.getSingleData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await FinancialYearService.updateData(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Updated Succssfully!',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FinancialYearService.deleteData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Deleted Succssfully!',
    data: result,
  });
});

export const FinancialYearController = {
  insertIntoDB,
  getAllData,
  dueYearData,
  getSingleData,
  updateData,
  deleteData,
};
