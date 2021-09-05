import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { PlayerProps } from "../../../models/Player";
import { GraphQLDateTime } from "../scalars/DateTime";

export const Player = new GraphQLObjectType<PlayerProps>({
  name: "Player",
  fields: () => ({
    playerId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    country: {
      type: new GraphQLNonNull(GraphQLString),
    },
    signatureHeroes: {
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
    ...require("../fields/Edges/Player/teams"),
  }),
});
