import { z } from 'zod';

const create = z.object({
  home_id: z.string({required_error: "Home Id is Required!"}),
  owner_name: z.string({required_error: "Owner name is Required!"}),
  father_or_husband: z.string({required_error: "Father or Husband is Required!"}),
  home_name: z.string().optional(),
  home_type: z.enum(['chapra', 'chowchala', 'adhapaka', 'paka', 'bohutal'] as [string, ...string[]], {required_error:" House Type is Required!"}),
  holding_no: z.string({required_error: "Holding Number is Required!"}),
  nid_no: z.string({required_error: "Nid Number is Required!"}),
  phone_no: z.string({required_error: "Phone Number is Required!"}),
  occupation: z.string({required_error: "Occupation is Required!"}),
  profile_img: z.string().optional(),
  village_name: z.string({required_error: "Village Name is Required!"}),
  house_price: z.string({required_error: "House Price is Required!"}),
  tax_levied: z.string({required_error: "Tax Levied is Required!"}),
  taxable_value: z.string({required_error: "Taxable value is Required!"}),
  colony: z.string({required_error: "Colony is Required!"}),
});

export const HomeValidation = {
  create
};
