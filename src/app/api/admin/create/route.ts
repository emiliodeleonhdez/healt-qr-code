import { NextResponse } from 'next/server';
// import { connectDB } from '@/app/lib/mongoose';
import AdminModel from '@/app/models/Admin';
import bcrypt from 'bcryptjs';
import connectDb from '@/app/lib/mongoose';
import chalk from 'chalk';
// import { requireAdmin } from '@/app/lib/require-admin'; // valida admin_token cuando ya hay admins

export async function POST(req: Request) {
  try {
    const { email, password, roles } = await req.json();

    if (!email || !password) {
      console.log(chalk.red('Email and password are required'));
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    await connectDb();

    // 1) ¿Hay admins ya?
    // const adminsCount = await AdminModel.countDocuments();

    // if (adminsCount > 0) {
    //   // 2) Si ya hay, solo otro admin puede crear
    //   try {
    //     await requireAdmin();
    //   } catch {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    //   }
    // }

    // 3) Evita duplicado
    const normalizedEmail = String(email).toLowerCase().trim();
    const exists = await AdminModel.findOne({ email: normalizedEmail });
    if (exists) {
      console.log(chalk.red('Admin already exists'));
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      );
    }

    // 4) Crea
    const passwordHash = await bcrypt.hash(password, 10);
    const admin = await AdminModel.create({
      email: normalizedEmail,
      passwordHash,
      roles: Array.isArray(roles) && roles.length ? roles : ['admin'],
      isActive: true,
    });

    return NextResponse.json({
      ok: true,
      admin: { id: admin._id, email: admin.email },
    });
  } catch (err) {
    console.error(chalk.red('Error while creating admin'), err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
