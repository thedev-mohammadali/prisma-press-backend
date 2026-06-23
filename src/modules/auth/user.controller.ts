import type { Request, Response } from "express";
import status from "http-status";
import type { IUserRegistrationPayload } from "./user.interface";
import { userService } from "./user.service";

const registerUser = async (
  req: Request<{}, {}, IUserRegistrationPayload>,
  res: Response,
) => {
  const Payload: IUserRegistrationPayload = req.body;
  const userData = await userService.registerUserIntoDB(Payload);
  res.status(status.CREATED).json({
    success: true,
    statusCode: status.CREATED,
    message: "User registered successfully",
    data: {
      userData,
    },
  });
};

export const userController = {
  registerUser,
};
