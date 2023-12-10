import { IHome } from './home.interface';
import { Home } from './home.model';

const insertIntoDB = async (data: IHome): Promise<IHome> => {
  const result = (await Home.create(data)).populate('colony');
  return result;
};

const getAllData = async (): Promise<IHome[]> => {
  const result = await Home.find({}).populate('colony');
  return result;
};

const getSingleData = async (id: string): Promise<IHome | null> => {
  const result = await Home.findOne({ _id: id }).populate('colony');
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IHome>
): Promise<IHome | null> => {
  const filters = { _id: id };
  const updateData = payload;
  const options = {
    new: true,
  };
  const result = await Home.findOneAndUpdate(
    filters,
    updateData,
    options
  ).populate('colony');
  return result;
};

const deleteData = async (id: string): Promise<IHome | null> => {
  const result = await Home.findOneAndDelete({ _id: id }).populate('colony');
  return result;
};

export const HomeService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
