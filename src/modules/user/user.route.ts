import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import type { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { Role } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import catchAsync from "../../utils/catchAsync";
import { jwtUtils } from "../../utils/jwt";
import { userController } from "./user.controller";

const router = Router();

declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        name: string;
        id: string;
        role: Role;
      };
    }
  }
}

router.post("/register", userController.registerUser);

const auth = (...requiredRoles: Role[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      throw new Error("Login to access");
    }

    const verifiedToken = jwtUtils.verifyToken(
      accessToken,
      config.jwt_access_secret,
    );

    if (!verifiedToken.success) {
      throw new Error(verifiedToken.error);
    }

    const { email, id, name, role } = verifiedToken.data as JwtPayload;

    if (requiredRoles.length && !requiredRoles.includes(role)) {
      throw new Error("Forbidden!");
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
        name,
        email,
        role,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.activeStatus === "BLOCKED") {
      throw new Error("You are blocked.");
    }

    req.user = {
      id,
      name,
      email,
      role,
    };

    next();
  });
};

router.get(
  "/me",
  //   (req: Request, res: Response, next: NextFunction) => {
  //     const { accessToken } = req.cookies;

  //     const verifiedToken = jwtUtils.verifyToken(
  //       accessToken,
  //       config.jwt_access_secret,
  //     );

  //     if (typeof verifiedToken === "string") {
  //       throw new Error(verifiedToken);
  //     }

  //     const { email, name, id, role } = verifiedToken;

  //     const requiredRoles = [Role.ADMIN, Role.AUTHOR, Role.USER];

  //     if (!requiredRoles.includes(role)) {
  //       return res.status(status.FORBIDDEN).json({
  //         success: false,
  //         statusCode: status.FORBIDDEN,
  //         message: "Forbidden. You don't have permission to access this resource",
  //       });
  //     }

  //     req.user = {
  //       email,
  //       name,
  //       id,
  //       role,
  //     };

  //     next();
  //   },
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  userController.getMyProfile,
);

export const userRoutes: Router = router;
