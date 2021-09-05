import { GraphQLList, GraphQLNonNull } from "graphql";
import { field } from "../../../../../function/fields";
import { TeamProps } from "../../../../../models/Team";
import * as resolvers from "../../../resolvers/Edge/Team/players";
import { Player } from "../../../types/Player";

export const players = field<TeamProps>({
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Player))),
  resolve: resolvers.players,
});
