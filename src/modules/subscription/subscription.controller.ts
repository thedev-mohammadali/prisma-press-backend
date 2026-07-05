import type { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { subscriptionService } from "./subscription.service";

const createCheckoutSession = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;

    const result = await subscriptionService.createCheckoutSession(
      userId as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: "Checkout completed successfully",
      data: result,
    });
  },
);

const handleWebhook = catchAsync(async (req: Request, res: Response) => {
  let event = req.body as Buffer;
  const signature = req.headers["stripe-signature"];

  await subscriptionService.handleWebhook(event, signature as string);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Webhook triggered successfully",
    data: null,
  });
});

export const subscriptionController = {
  createCheckoutSession,
  handleWebhook,
};
