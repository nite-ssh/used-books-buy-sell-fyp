import type { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import type { GraphQLError, GraphQLFormattedError } from "graphql";

export interface GraphqlContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
}

export const formatError = (error: GraphQLError) => ({
  message: error.extensions?.response?.message || error.message,
  extensions: {
    code: error.extensions.code,
  },
} as GraphQLFormattedError);
