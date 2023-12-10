import { Model } from 'mongoose';

export type IFinancialYear = {
  start_year: string;
  end_year: string;
};

export type FinancialModel = Model<IFinancialYear, Record<string, unknown>>;
