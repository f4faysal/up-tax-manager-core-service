import { Schema, model } from 'mongoose';
import { ColonyModel, IColony } from './colony.interface';

const colonySchema = new Schema<IColony, ColonyModel>({
  colony_name: {
    type: String,
    required: true,
  },
  ward_no: {
    type: String,
    required: true,
  },
});

export const Colony = model('Colony', colonySchema);
