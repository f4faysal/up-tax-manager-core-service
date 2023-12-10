import { IHome } from './home.interface';
import { Home } from './home.model';

const insertIntoDB = async (data: IHome): Promise<IHome> => {
  const result = await Home.create(data);
  return result;
};

const getAllData = async (): Promise<IHome[]> => {
  const result = await Home.find({});
  return result;
};

const getSingleData = async (id: string): Promise<IHome | null> => {
  const result = await Home.findOne({ _id: id });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IHome>
): Promise<IHome | null> => {
  const result = await Home.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IHome | null> => {
  const result = await Home.findOneAndDelete({ _id: id });
  return result;
};

export const HomeService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
