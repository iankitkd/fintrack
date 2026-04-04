import { HTTP_STATUS } from "#/constants/httpStatus.js";
import { getMe, login } from "#/modules/auth/auth.service.js";
import type { Request, Response } from "express";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 24 * 60 * 60 * 1000,
};

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Required field missing" });
    }

    const result = await login(email, password);

    res.cookie("token", result.token, COOKIE_OPTIONS);

    res.json({ message: "Login successful" });
  } catch (error: unknown) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const getMeHandler = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "Unauthorized" });
    }
    const user = await getMe(userId);
    res.json(user);
  } catch (error: unknown) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const logoutHandler = async (_req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
