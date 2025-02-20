import { NextResponse } from "next/server";
import User, { UserData } from "../../../models/Users"; // Importar el modelo de Usuario

// Obtener usuario por ID
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }
}

// Actualizar usuario por ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
    medicalInsurancePolicy, // Póliza de seguro médico
  }: UserData = await request.json();

  try {
    // Encontrar y actualizar usuario por ID
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        lastName,
        birthDate,
        phoneNumber,
        bloodType,
        allergies,
        preExistingConditions,
        currentTreatment,
        emergencyContacts,
        medicalInsurancePolicy, // Actualizar póliza de seguro médico
      },
      { new: true } // Devuelve el documento actualizado
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}

// Eliminar usuario por ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const userDelete = await User.findByIdAndDelete(id);
    if (!userDelete) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "User deleted", user: userDelete },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "Error deleting user" }, { status: 500 });
  }
}
