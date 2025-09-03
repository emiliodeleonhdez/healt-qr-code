import { SignJWT, jwtVerify, JWTPayload } from 'jose';
import { cookies } from 'next/headers';

const cookieStore = await cookies();

export const ADMIN_JWT_COOKIE = 'admin_token';
const ADMIN_JWT_SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'dev-secret'
);
const ADMIN_JWT_EXPIRES = process.env.ADMIN_JWT_EXPIRES || '1d';

type AdminJwtPayload = JWTPayload & {
  sub: string;
  email: string;
  roles?: string[];
};

export async function signAdminJwt(
  payload: Omit<AdminJwtPayload, 'iat' | 'exp'>
) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setSubject(payload.sub as string)
    .setIssuedAt()
    .setExpirationTime(ADMIN_JWT_EXPIRES)
    .sign(ADMIN_JWT_SECRET);
}

export async function verifyAdminJwt(token: string) {
  const { payload } = await jwtVerify<AdminJwtPayload>(token, ADMIN_JWT_SECRET);
  return payload;
}

// Helpers de cookie httpOnly
export function setAdminCookie(token: string) {
  cookieStore.set({
    name: ADMIN_JWT_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}

export function clearAdminCookie() {
  cookieStore.delete(ADMIN_JWT_COOKIE);
}

export function getAdminTokenFromCookies() {
  const c = cookieStore.get(ADMIN_JWT_COOKIE);
  return c?.value || null;
}
