import { GraphQLFieldResolver } from "graphql";

export const teams: GraphQLFieldResolver<null, any, any> = async () => {
  return [];
};
