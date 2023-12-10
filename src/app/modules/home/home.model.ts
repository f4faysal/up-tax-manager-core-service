/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from 'mongoose';
import { HomeModel, IHome } from './home.interface';

const homeSchema = new Schema<IHome, HomeModel>(
  {
    home_id: {
      type: String,
      required: true,
    },
    owner_name: {
      type: String,
      required: true,
    },
    father_or_husband: {
      type: String,
      required: true,
    },
    home_name: {
      type: String,
      required: true,
    },
    home_type: {
      type: String,
      enum: ['chapra', 'chowchala', 'adhapaka', 'paka', 'bohutal'],
      required: true,
    },
    holding_no: {
      type: String,
      required: true,
    },
    nid_no: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
      unique: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    profile_img: {
      type: String,
    },
    village_name: {
      type: String,
      required: true,
    },
    house_price: {
      type: String,
      required: true,
    },
    tax_levied: {
      type: String,
      required: true,
    },
    taxable_value: {
      type: String,
      required: true,
    },
    colony: {
      type: Schema.Types.ObjectId,
      ref: 'Colony',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Home = model<IHome, HomeModel>('Home', homeSchema);
