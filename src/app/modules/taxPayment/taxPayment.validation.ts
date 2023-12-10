import { z } from 'zod';

const create = z.object({
  body: z.object({
    home: z.string({ required_error: 'Home Id is Required!' }),
    financial_year: z.string({
      required_error: 'Financial Year Id is Required!',
    }),
    amount: z.string({ required_error: 'Amount is Required!' }).optional(),
    status: z.enum(['paid', 'unpaid'], {
      required_error: 'Status is Required!',
    }).optional(),
  }),
});

const update = z.object({
  body: z.object({
    home: z.string().optional(),
    financial_year: z.string().optional(),
    amount: z.string().optional(),
    status: z.enum(['paid', 'unpaid']).optional(),
  }),
});

export const TaxPaymentValidation = {
  create,
  update,
};
