import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByEmail, findUserById } from "#/modules/users/user.service.js";
import { config } from "#/config/index.js";

const generateToken = (user: { id: string; role: string }) => {
  return jwt.sign(user, config.jwtSecret, { expiresIn: "1d" });
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);

  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = generateToken(user);

  return { token };
};

export const getMe = async (userId: string) => {
  const user = await findUserById(userId);
  return user;
};
