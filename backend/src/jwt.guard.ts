// [SEC-04] verify JWT เอง
import jwt from 'jsonwebtoken';
export function verifyToken(t: string) {
  return jwt.verify(t, process.env.JWT_SECRET as string);
}
