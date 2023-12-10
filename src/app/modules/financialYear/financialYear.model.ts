import { Schema, model } from 'mongoose';
import { FinancialModel, IFinancialYear } from './financialYear.interface';

const financialYearSchema = new Schema<IFinancialYear, FinancialModel>({
  start_year: {
    type: String,
    required: true,
  },
  end_year: {
    type: String,
    required: true,
  },
});

export const FinancialYear = model('FinancialYear', financialYearSchema);
