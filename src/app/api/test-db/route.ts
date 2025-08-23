import connectDb from '@/app/lib/mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDb();
  return NextResponse.json({ ok: true });
}
