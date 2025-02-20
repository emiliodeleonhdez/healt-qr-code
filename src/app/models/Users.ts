import mongoose, { Schema, Document } from "mongoose";
import { EmergencyContact } from "../interfaces";

export interface UserData extends Document {
  name: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  bloodType: string;
  allergies: string[];
  preExistingConditions: string[];
  currentTreatment: string[];
  emergencyContacts: EmergencyContact[];
  medicalInsurancePolicy: string;
}

const emergencyContactSchema = new Schema<EmergencyContact>({
  name: { type: String, required: true },
  relation: { type: String, required: true },
  phone: { type: String, required: true },
});

const userSchema = new Schema<UserData>({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  bloodType: { type: String, required: true },
  allergies: { type: [String], required: true },
  preExistingConditions: { type: [String], required: true },
  currentTreatment: { type: [String], required: true },
  emergencyContacts: { type: [emergencyContactSchema], required: true },
  medicalInsurancePolicy: { type: String, required: true },
});

const UserModel =
  mongoose.models.User || mongoose.model<UserData>("User", userSchema);

export default UserModel;
