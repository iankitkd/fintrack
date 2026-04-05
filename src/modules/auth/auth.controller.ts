import { getMe, login } from "#/modules/auth/auth.service.js";
import type { AuthRequest } from "#/types/express.js";
import { asyncHandler } from "#/utils/asyncHandler.js";
import type { Request, Response } from "express";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 24 * 60 * 60 * 1000,
};

export const loginHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await login(email, password);

    res.cookie("token", result.token, COOKIE_OPTIONS);
    res.json({ message: "Login successful" });
  },
);

export const getMeHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user.id;
    const user = await getMe(userId);
    res.json(user);
  },
);

export const logoutHandler = asyncHandler(
  async (_req: AuthRequest, res: Response) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  },
);
