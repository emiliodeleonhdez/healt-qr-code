import mongoose, { Schema, Document } from 'mongoose';
import { EmergencyContact } from '../interfaces';

export interface UserData extends Document {
  fullName: string;
  dateOfBirth: string | null;
  bloodType: string;
  allergies: string[];
  currentTreatment: string[];
  existingConditions: string[];
  additionalInfo: string;
  emergencyContacts: EmergencyContact[];
  insurance: string;
}

const EmergencyContactSchema = new Schema<EmergencyContact>({
  name: { type: String, required: true },
  relation: { type: String, required: true },
  phone: { type: String, required: true },
});

const userSchema = new Schema<UserData>({
  fullName: { type: String, required: true },
  dateOfBirth: { type: String },
  bloodType: { type: String },
  allergies: { type: [String], default: [] },
  currentTreatment: { type: [String], default: [] },
  existingConditions: { type: [String], default: [] },
  additionalInfo: { type: String, trim: true, default: '' },
  emergencyContacts: {
    type: [EmergencyContactSchema],
    validate: {
      validator: (arr: unknown[]) => Array.isArray(arr) && arr.length > 0,
      message: 'At least one emergency contact is required',
    },
  },
  insurance: { type: String, trim: true, default: '' },
});

const UserModel =
  mongoose.models.User || mongoose.model<UserData>('User', userSchema);

export default UserModel;
