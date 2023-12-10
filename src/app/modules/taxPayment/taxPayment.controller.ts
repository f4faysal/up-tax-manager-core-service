import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { TaxPaymentService } from './taxPayment.service';
import { ITaxPayment } from './taxPayment.interface';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await TaxPaymentService.insertIntoDB(data);
  sendResponse<ITaxPayment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment Succssfully!',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await TaxPaymentService.getAllData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TaxPaymentService.getSingleData(id);
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
  const result = await TaxPaymentService.updateData(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Updated Succssfully!',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TaxPaymentService.deleteData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Deleted Succssfully!',
    data: result,
  });
});

export const TaxPaymentController = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
