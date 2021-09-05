import { GraphQLFieldResolver } from "graphql";
import { TeamProps } from "../../../../../models/Team";

export const players: GraphQLFieldResolver<TeamProps, any, any> = async () => {
  return [];
};
