import { TaxPayment } from "../taxPayment/taxPayment.model";
import { IFinancialYear } from "./financialYear.interface";
import { FinancialYear } from "./financialYear.model";


const insertIntoDB = async (data: IFinancialYear): Promise<IFinancialYear> => {
  const result = await FinancialYear.create(data);
  return result;
};

const getAllData = async (): Promise<IFinancialYear[]> => {
  const result = await FinancialYear.find({});
  return result;
};

const dueYearData = async(homeId: string): Promise<IFinancialYear[] | null> => {
  const isExistBefore = await TaxPayment.find({ home: homeId, status: 'paid' });
  const financialYear = await FinancialYear.find({});
  const paidDataIds = isExistBefore.map(data => data.financial_year.toString());
  const financialIds = financialYear.map(data => data.id.toString());
  const dueYearIds = financialIds.filter(id => !paidDataIds.includes(id));
  const result = await FinancialYear.find({_id: dueYearIds});
  return result;
}

const getSingleData = async (id: string): Promise<IFinancialYear | null> => {
  const result = await FinancialYear.findOne({ _id: id });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IFinancialYear>
): Promise<IFinancialYear | null> => {
  const result = await FinancialYear.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IFinancialYear | null> => {
  const result = await FinancialYear.findOneAndDelete({ _id: id });
  return result;
};

export const FinancialYearService = {
  insertIntoDB,
  getAllData,
  dueYearData,
  getSingleData,
  updateData,
  deleteData,
};
