import { PrismaClient } from "@prisma/client";

// Log and normalize DATABASE_URL to help diagnose hosted env issues.
const rawDatabaseUrl = process.env.DATABASE_URL;
console.log('DATABASE_URL raw:', JSON.stringify(rawDatabaseUrl));
if (typeof rawDatabaseUrl === 'string') {
	process.env.DATABASE_URL = rawDatabaseUrl.replace(/^"|"$/g, '').trim();
	console.log('DATABASE_URL trimmed:', JSON.stringify(process.env.DATABASE_URL));
}

const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
