import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { TeamProps } from "../../../models/Team";
import { GraphQLDateTime } from "../scalars/DateTime";
import { type } from "../../../function/type";

export const Team = type<TeamProps>({
  name: "Team",
  description: `Team`,
  fields: () => ({
    teamId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    region: {
      type: new GraphQLNonNull(GraphQLString),
    },
    colors: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
  }),
});
