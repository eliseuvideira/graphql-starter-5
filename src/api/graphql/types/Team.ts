import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { TeamProps } from "../../../models/Team";
import { GraphQLDateTime } from "../scalars/DateTime";

export const Team = new GraphQLObjectType<TeamProps>({
  name: "Team",
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
    ...require("../fields/Edges/Team/players"),
  }),
});
