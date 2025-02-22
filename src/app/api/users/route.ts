import { NextResponse } from "next/server";
import connectDb from "@/app/lib/mongoose";
import UserModel, { UserData } from "@/app/models/Users";

connectDb();

export async function POST(request: Request) {
  console.log("Start of POST request");

  try {
    const {
      name,
      lastName,
      birthDate,
      phoneNumber,
      bloodType,
      allergies,
      preExistingConditions,
      currentTreatment,
      emergencyContacts,
      medicalInsurancePolicy,
    }: UserData = await request.json();

    const newUser = new UserModel({
      name,
      lastName,
      birthDate,
      phoneNumber,
      bloodType,
      allergies,
      preExistingConditions,
      currentTreatment,
      emergencyContacts,
      medicalInsurancePolicy,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const getUsers = await UserModel.find();
    return NextResponse.json({ users: getUsers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Failed to get users ${error}` }, { status: 400 });
  }
}
