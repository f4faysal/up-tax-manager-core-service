import { Schema, Types, model } from 'mongoose';
import { ITaxPayment, TaxPaymentModel } from './taxPayment.interface';

const taxPaymentSchema = new Schema<ITaxPayment, TaxPaymentModel>(
  {
    home: {
      type: Types.ObjectId,
      ref: 'Home',
      required: true,
    },
    financial_year: {
      type: Types.ObjectId,
      ref: 'FinancialYear',
      required: true,
    },
    amount: {
      type: String,
    },
    status: {
      type: String,
      enum: ['paid', 'unpaid'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const TaxPayment = model('TaxPayment', taxPaymentSchema);
