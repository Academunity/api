import "reflect-metadata";
import { Prisma } from "@prisma/client";
import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "@shared/container";

import { AppError } from "@shared/container/errors/AppError";

import { routes } from "./routes";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(err);
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      return response.status(400).json({
        message: err.message,
      });
    }

    if (err instanceof Prisma.PrismaClientValidationError) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
