import { Model, Schema } from 'mongoose';

export type IAdmin = {
  first_name: string;
  middle_name: string;
  last_name: string;
  date_of_birth?: string;
  profile_img?: string;
  contact_no: string;
  nid_no: string;
  role?: 'admin' | 'super_admin';
  status?: 'active' | 'inactive';
  gender?: 'male' | 'female' | 'others';
  email: string;
  colony: Schema.Types.ObjectId;
  password: string;
  change_password?: boolean;
  blood_group: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

};


export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contact_no?: string;
  gender?: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
};
