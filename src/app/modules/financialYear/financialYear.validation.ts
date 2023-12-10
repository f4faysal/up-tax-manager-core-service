import { z } from 'zod';

const create = z.object({
  body: z.object({
    start_year: z.string({ required_error: 'Start Year is Required!' }),
    end_year: z.string({ required_error: 'End Year is Required!' }),
  }),
});

const update = z.object({
  body: z.object({
    start_year: z.string().optional(),
    end_year: z.string().optional(),
  }),
});

export const FinancialYearValidation = {
  create,
  update,
};
