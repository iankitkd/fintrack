import { HTTP_STATUS } from "#/constants/httpStatus.js";
import { prisma } from "#/db/prisma.js";
import type { Role } from "#/generated/prisma/enums.js";
import { AppError } from "#/utils/AppError.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const createUser = async (
  email: string,
  password: string,
  role: Role,
) => {
  const userExist = await findUserByEmail(email);
  if (userExist) {
    throw new AppError("User already exist", HTTP_STATUS.BAD_REQUEST);
  }

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
  return prisma.user.findUnique({ where: { id } });
};

export const getUsers = () => {
  return prisma.user.findMany();
};
