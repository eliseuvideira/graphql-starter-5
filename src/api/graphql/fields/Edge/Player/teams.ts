import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from "graphql";
import * as resolvers from "../../../resolvers/Query/Team/teams";
import { Team } from "../../../types/Team";

export const teams: GraphQLFieldConfig<null, any, any> = {
  type: new GraphQLNonNull(new GraphQLList(Team)),
  resolve: resolvers.teams,
};
