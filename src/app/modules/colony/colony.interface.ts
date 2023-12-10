import { Model } from 'mongoose';

export type IColony = {
  colony_name: string;
  ward_no: string;
};

export type ColonyModel = Model<IColony, Record<string, unknown>>;
