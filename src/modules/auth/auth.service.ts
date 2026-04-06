import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../../config/index.js";
import { findUserByEmail, findUserById } from "../users/user.service.js";
import { AppError } from "../../utils/AppError.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";

const generateToken = (user: { id: string; role: string }) => {
  return jwt.sign(user, config.JWT_SECRET, { expiresIn: "1d" });
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid credentials", HTTP_STATUS.UNAUTHORIZED);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new AppError("Invalid credentials", HTTP_STATUS.UNAUTHORIZED);
  }

  const token = generateToken(user);

  return { token };
};

export const getMe = async (userId: string) => {
  const user = await findUserById(userId);
  return user;
};
