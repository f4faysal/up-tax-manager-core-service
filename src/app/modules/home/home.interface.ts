import { Model, Schema } from 'mongoose';

export type IHome = {
  home_id: string;
  owner_name: string;
  father_or_husband: string;
  home_name?: string;
  home_type: 'chapra' | 'chowchala' | 'adhapaka' | 'paka' | 'bohutal';
  holding_no: string;
  nid_no: string;
  phone_no: string;
  occupation: string;
  profile_img?: string;
  village_name: string;
  house_price: string;
  tax_levied: string;
  taxable_value: string;
  colony: Schema.Types.ObjectId;
};

export type HomeModel = Model<IHome, Record<string, unknown>>;
