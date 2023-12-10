import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Home } from '../home/home.model';
import { ITaxPayment } from './taxPayment.interface';
import { TaxPayment } from './taxPayment.model';
import { FinancialYear } from '../financialYear/financialYear.model';

const insertIntoDB = async (data: ITaxPayment): Promise<ITaxPayment> => {
  const { home, financial_year } = data;
  const isExistHouse = await Home.findOne({ _id: home });
  const isExistFinancialYear = await FinancialYear.findOne({
    _id: financial_year,
  });

  if (!isExistHouse) {
    throw new ApiError(httpStatus.NOT_FOUND, 'This house is not register!');
  }

  if (!isExistFinancialYear) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'This is not a right financial year'
    );
  }

  const { house_price } = isExistHouse;

  if (house_price) {
    data['amount'] = house_price;
  }

  data['status'] = 'paid';

  const result = (
    await (await TaxPayment.create(data)).populate('home')
  ).populate('financial_year');
  return result;
};

const getAllData = async (): Promise<ITaxPayment[]> => {
  const result = await TaxPayment.find({});
  return result;
};

const getSingleData = async (id: string): Promise<ITaxPayment | null> => {
  const result = await TaxPayment.findOne({ _id: id });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<ITaxPayment>
): Promise<ITaxPayment | null> => {
  const result = await TaxPayment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<ITaxPayment | null> => {
  const result = await TaxPayment.findOneAndDelete({ _id: id });
  return result;
};

export const TaxPaymentService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
