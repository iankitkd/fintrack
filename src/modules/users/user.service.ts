import { prisma } from "#/db/prisma.js";
import type { Role } from "#/generated/prisma/enums.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const createUser = async (
  email: string,
  password: string,
  role: Role,
) => {
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);

  return prisma.user.create({
    data: {
      email,
      password: hashed,
      role,
    },
  });
};

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const findUserById = (id: string) => {
  return prisma.user.findUnique({ where: { id }, select: { password: false } });
};

export const getUsers = () => {
  return prisma.user.findMany({ select: { password: false } });
};
