import { HTTP_STATUS } from "#/constants/httpStatus.js";
import { createUser, getUsers } from "#/modules/users/user.service.js";
import type { Request, Response } from "express";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Required field missing" });
    }
    const user = await createUser(email, password, role);
    res.status(HTTP_STATUS.CREATED).json(user);
  } catch (error: unknown) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const getUsersHandler = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(HTTP_STATUS.OK).json({ users });
  } catch (error: unknown) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
