import type { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { createUser, getUsers } from "./user.service.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";

export const createUserHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    const user = await createUser(email, password, role);
    res.status(HTTP_STATUS.CREATED).json(user);
  },
);

export const getUsersHandler = asyncHandler(
  async (_req: Request, res: Response) => {
    const users = await getUsers();
    res.status(HTTP_STATUS.OK).json({ users });
  },
);
