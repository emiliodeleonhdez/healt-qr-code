import { NextResponse } from 'next/server';
import connectDb from '@/app/lib/mongoose';
import UserModel, { UserData } from '@/app/models/Users';

export async function POST(request: Request) {
  await connectDb();

  try {
    const {
      fullName,
      dateOfBirth,
      bloodType,
      allergies,
      currentTreatment,
      existingConditions,
      additionalInfo,
      emergencyContacts,
      insurance,
    }: UserData = await request.json();

    const newUser = new UserModel({
      fullName,
      dateOfBirth,
      bloodType,
      allergies,
      currentTreatment,
      existingConditions,
      additionalInfo,
      emergencyContacts,
      insurance,
    });

    await newUser.save();

    return NextResponse.json(
      { message: 'User created successfully', user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}

export async function GET() {
  await connectDb();

  try {
    const getUsers = await UserModel.find();
    return NextResponse.json({ users: getUsers }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to get users ${error}` },
      { status: 400 }
    );
  }
}
