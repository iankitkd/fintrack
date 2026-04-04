import { prisma } from "#/db/prisma.js";
import type { Role } from "#/generated/prisma/enums.js";
import bcrypt from "bcrypt";

export const createUser = async (
  email: string,
  password: string,
  role: Role,
) => {
  const hashed = await bcrypt.hash(password, 10);

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
  return prisma.user.findUnique({ where: { id } });
};

export const getUsers = () => {
  return prisma.user.findMany();
};
