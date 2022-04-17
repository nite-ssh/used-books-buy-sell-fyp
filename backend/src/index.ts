import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import Express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload";
import { createServer } from "http";
import { buildSchema } from "type-graphql";
import { resolvers } from "./graphql";
import prisma from "./utils/prisma-client.utils";
import { formatError, GraphqlContext } from "./graphql/configs";
import { authChecker } from "./graphql/middlewares/authorization";
import { PORT } from "./utils/constants.utils";

(async () => {
  const app = Express();

  app
    .use(
      cors({
        origin: ["http://localhost:3000"],
      }),
    )
    .get("/", (_req: Request, res: Response) => {
      res.send("Hello World!");
    });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
      authChecker,
    }),
    context: ({ req, res }): GraphqlContext => ({ req, res, prisma }),
    formatError,
    uploads: false,
  });

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  const httpServer = createServer(app);

  apolloServer.installSubscriptionHandlers(httpServer);

  apolloServer.applyMiddleware({ app, cors: false });

  httpServer.listen(
    PORT,
    // eslint-disable-next-line no-console
    () => console.log(`Server is running on port ${PORT}`),
  );
})();
