import { RequestHandler } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const graphql = () =>
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
  });
