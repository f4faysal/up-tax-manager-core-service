import { z } from 'zod';

const createAdmin = z.object({
  body: z.object({
    first_name: z.string({ required_error: 'First Name is Required!' }),
    middle_name: z.string().optional(),
    last_name: z.string({ required_error: 'Last Name is Required!' }),
    role: z.enum(['admin', 'super_admin'] as [string, ...string[]], {
      required_error: 'Role is Required!',
    }),
    blood_group: z
      .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as [
        string,
        ...string[]
      ])
      .optional(),
    date_of_birth: z.string({ required_error: 'Date of Birth is Required!' }),
    nid_no: z.string({ required_error: 'Nid Number is Required!' }),
    status: z.enum(['active', 'inactive'] as [string, ...string[]], {
      required_error: 'Status is Required!',
    }),
    gender: z
      .enum(['male', 'female', 'others'] as [string, ...string[]])
      .optional(),
    email: z.string().email().optional(),
    contact_no: z.string({ required_error: 'Contact number is Required!' }),
    profile_img: z.string().optional(),
    password: z.string({ required_error: 'Password is Required!' }),
    change_password: z.boolean({
      required_error: 'Change Password is Required!',
    }),
    colony: z.string({ required_error: 'Colony is Required!' }),
  }),
});

export const AdminValidation = {
  createAdmin,
};
