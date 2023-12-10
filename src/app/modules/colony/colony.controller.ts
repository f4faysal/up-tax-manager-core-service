import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ColonyService } from './colony.service';
import sendResponse from '../../../shared/sendResponse';
import { IColony } from './colony.interface';
import httpStatus from 'http-status';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await ColonyService.insertIntoDB(data);
  sendResponse<IColony>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Colony Create Succssfully!',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await ColonyService.getAllData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ColonyService.getSingleData(id);
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
  const result = await ColonyService.updateData(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Updated Succssfully!',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ColonyService.deleteData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Deleted Succssfully!',
    data: result,
  });
});

export const ColonyController = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
