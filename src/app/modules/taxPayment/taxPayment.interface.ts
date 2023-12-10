import { Model, Schema } from 'mongoose';

export type ITaxPayment = {
  home: Schema.Types.ObjectId;
  financial_year: Schema.Types.ObjectId;
  amount: string;
  status: 'paid' | 'unpaid';
};

export type TaxPaymentModel = Model<ITaxPayment, Record<string, unknown>>;
