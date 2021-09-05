import { GraphQLList, GraphQLNonNull } from "graphql";
import { field } from "../../../../../function/fields";
import { PlayerProps } from "../../../../../models/Player";
import * as resolvers from "../../../resolvers/Edge/Player/teams";
import { Team } from "../../../types/Team";

export const teams = field<PlayerProps>({
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Team))),
  resolve: resolvers.teams,
});
