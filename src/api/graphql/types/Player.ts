import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { PlayerProps } from "../../../models/Player";
import { GraphQLDateTime } from "../scalars/DateTime";
import { type } from "../../../function/type";

export const Player = type<PlayerProps>({
  name: "Player",
  description: `Player`,
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
  }),
});
