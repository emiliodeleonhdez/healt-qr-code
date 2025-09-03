import { NextResponse } from 'next/server';
import AdminModel from '../../../models/Admin';
import bcrypt from 'bcryptjs';
import { signAdminJwt, setAdminCookie } from '../../../lib/admin-auth';
import connectDb from '../../../lib/mongoose';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and Password are required' },
        { status: 400 }
      );
    }

    await connectDb();

    const admin = await AdminModel.findOne({
      email: email.toLowerCase().trim(),
      isActive: true,
    });
    if (!admin) {
      return NextResponse.json({ error: 'Bad credentials' }, { status: 401 });
    }

    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      return NextResponse.json({ error: 'Bad credentials' }, { status: 401 });
    }

    const token = await signAdminJwt({
      sub: String(admin._id),
      email: admin.email,
      roles: admin.roles,
    });
    setAdminCookie(token);

    admin.lastLoginAt = new Date();
    admin.save().catch(() => {});

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('admin login error', err);
    return NextResponse.json({ error: 'Error while login' }, { status: 500 });
  }
}
