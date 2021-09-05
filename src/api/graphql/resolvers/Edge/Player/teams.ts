import { GraphQLFieldResolver } from "graphql";
import { PlayerProps } from "../../../../../models/Player";

export const teams: GraphQLFieldResolver<PlayerProps, any, any> = async () => {
  return [];
};
