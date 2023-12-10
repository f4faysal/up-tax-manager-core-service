import { Schema, model } from 'mongoose';
import { ITaxPayment, TaxPaymentModel } from './taxPayment.interface';

const taxPaymentSchema = new Schema<ITaxPayment, TaxPaymentModel>(
  {
    home: {
      type: Schema.Types.ObjectId,
      ref: 'Home',
      required: true,
    },
    financial_year: {
      type: Schema.Types.ObjectId,
      ref: 'FinancialYear',
      required: true,
    },
    amount: {
      type: String,
      required: true,
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
