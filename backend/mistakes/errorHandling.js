import express, { NextFunction, request, Response } from "express";

const router = express.Router();

router.get <
  {} >
  ("/good",
  (req, res) => {
    res.statusCode = 400;
    throw new Error(
      "Something went sideway! but its being handled by our custom error"
    );
  });

export function notFound(req, res, next) {
  next(error);
}

export function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  const responseBody = {
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? "🥞" : err.stack,
  };

  console.error("Error", responseBody);
  res.json(responseBody);
}
