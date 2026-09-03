// [ARC-01] frontend ต่อ database ตรง
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
