import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import path from "path";
import fs from "fs";
import { PlayerProps } from "../../../models/Player";
import { GraphQLDateTime } from "../scalars/DateTime";

export const Player = new GraphQLObjectType<PlayerProps>({
  name: "Player",
  fields: () => {
    let edges = {};

    const EDGE_DIR = path.join(__dirname, "..", "fields", "Edge", "Player");

    const edgesFiles = fs.readdirSync(EDGE_DIR);

    for (const edge of edgesFiles) {
      const EDGE_FILE = path.join(EDGE_DIR, edge);

      const module = require(EDGE_FILE);

      edges = { ...edges, ...module };
    }

    return {
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

      ...edges,
    };
  },
});
