import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from "graphql";
import * as resolvers from "../../../resolvers/Query/Player/players";
import { Player } from "../../../types/Player";

export const players: GraphQLFieldConfig<null, any, any> = {
  type: new GraphQLNonNull(new GraphQLList(Player)),
  resolve: resolvers.players,
};
