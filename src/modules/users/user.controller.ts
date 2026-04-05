import { HTTP_STATUS } from "#/constants/httpStatus.js";
import { createUser, getUsers } from "#/modules/users/user.service.js";
import { asyncHandler } from "#/utils/asyncHandler.js";
import type { Request, Response } from "express";

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
