import type { NextFunction, Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import type { IUserRegistrationPayload } from "./user.interface";
import { userService } from "./user.service";

const registerUser = catchAsync(
  async (
    req: Request<{}, {}, IUserRegistrationPayload>,
    res: Response,
    next: NextFunction,
  ) => {
    const Payload: IUserRegistrationPayload = req.body;
    const userData = await userService.registerUserIntoDB(Payload);
    sendResponse(res, {
      success: true,
      statusCode: status.CREATED,
      message: "User registered successfully",
      data: {
        userData,
      },
    });
  },
);

export const userController = {
  registerUser,
};
