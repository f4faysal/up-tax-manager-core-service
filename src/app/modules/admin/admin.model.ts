import { Schema, model } from 'mongoose';
import { AdminModel, IAdmin } from './admin.interface';

const AdminSchema = new Schema<IAdmin, AdminModel>(
  {
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'super_admin'],
      required: true,
    },
    blood_group: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    nid_no: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contact_no: {
      type: String,
      unique: true,
      required: true,
    },
    profile_img: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    change_password: {
      type: Boolean,
      default: false,
    },
    colony: {
      type: Schema.Types.ObjectId,
      ref: 'Colony',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Admin = model<IAdmin, AdminModel>('Admin', AdminSchema);
