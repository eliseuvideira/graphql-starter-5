import { GraphQLFieldResolver } from "graphql";

export const players: GraphQLFieldResolver<null, any, any> = async () => {
  return [];
};
