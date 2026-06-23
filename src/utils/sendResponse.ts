import type { Response } from "express";

type TMeta = {
  page: number;
  limit: number;
  total: number;
};

type TResponseData<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  meta?: TMeta;
};

const sendResponse = <T>(
  res: Response,
  { data, message, statusCode, success, meta }: TResponseData<T>,
) => {
  res.status(statusCode).json({
    success,
    statusCode,
    message,
    data,
    meta,
  });
};

export default sendResponse;
