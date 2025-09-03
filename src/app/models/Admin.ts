import mongoose, { Schema, Document } from 'mongoose';

export interface AdminDocument extends Document {
  email: string;
  passwordHash: string;
  roles: string[]; // opcional, por si quieres granularidad
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<AdminDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    roles: { type: [String], default: ['admin'] },
    isActive: { type: Boolean, default: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

const AdminModel =
  mongoose.models.Admin || mongoose.model<AdminDocument>('Admin', AdminSchema);
export default AdminModel;
