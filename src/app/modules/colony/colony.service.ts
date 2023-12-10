import { IColony } from './colony.interface';
import { Colony } from './colony.model';

const insertIntoDB = async (data: IColony): Promise<IColony> => {
  const result = await Colony.create(data);
  return result;
};

const getAllData = async (): Promise<IColony[]> => {
  const result = await Colony.find({});
  return result;
};

const getSingleData = async (id: string): Promise<IColony | null> => {
  const result = await Colony.findOne({ _id: id });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IColony>
): Promise<IColony | null> => {
  const result = await Colony.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IColony | null> => {
  const result = await Colony.findOneAndDelete({ _id: id });
  return result;
};

export const ColonyService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
