import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IHome } from './home.interface';
import { HomeService } from './home.service';

const insertIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await HomeService.insertIntoDB(data);
    sendResponse<IHome>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Home is entry in Database successfully!',
      data: result,
    });
  }
);

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeService.getAllData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeService.getSingleData(id);
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
  const result = await HomeService.updateData(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Updated Succssfully!',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeService.deleteData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Deleted Succssfully!',
    data: result,
  });
});

export const HomeController = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
