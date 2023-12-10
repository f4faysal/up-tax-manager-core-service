import { ITaxPayment } from "./taxPayment.interface";
import { TaxPayment } from "./taxPayment.model";

const insertIntoDB = async (data: ITaxPayment): Promise<ITaxPayment> => {
  const result = await TaxPayment.create(data);
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
