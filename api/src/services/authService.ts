import { prisma } from "../lib/prisma";
import { signAuthToken } from "../lib/auth";
import { comparePassword, hashPassword } from "../lib/security";

export const authService = {
  async register(input: { email: string; password: string }) {
    const existing = await prisma.user.findUnique({ where: { email: input.email } });
    if (existing) {
      throw new Error("Email already in use");
    }

    const passwordHash = await hashPassword(input.password);
    const user = await prisma.user.create({
      data: {
        email: input.email,
        passwordHash
      }
    });

    const token = signAuthToken({ userId: user.id, email: user.email });
    return { user: { id: user.id, email: user.email }, token };
  },

  async login(input: { email: string; password: string }) {
    const user = await prisma.user.findUnique({ where: { email: input.email } });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValid = await comparePassword(input.password, user.passwordHash);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }

    const token = signAuthToken({ userId: user.id, email: user.email });
    return { user: { id: user.id, email: user.email }, token };
  }
};
