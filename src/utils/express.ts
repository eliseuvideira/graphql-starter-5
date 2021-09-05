import express from "express";
import cors from "cors";
import { exception, notFound } from "@ev-fns/errors";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const app = express();

export const middlewares = async (app: express.Express) => {
  app.use(cors());

  app.post(
    "/graphql",
    graphqlHTTP({
      schema: new GraphQLSchema({
        query: new GraphQLObjectType({
          name: "Query",
          fields: {
            hello: {
              type: GraphQLString,
              resolve: () => {
                return "Hello World!";
              },
            },
          },
        }),
      }),
    })
  );

  app.use(notFound);
  app.use(exception);
};
