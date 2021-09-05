import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import path from "path";
import fs from "fs";
import { TeamProps } from "../../../models/Team";
import { GraphQLDateTime } from "../scalars/DateTime";

export const Team = new GraphQLObjectType<TeamProps>({
  name: "Team",
  fields: () => {
    let edges = {};

    const EDGE_DIR = path.join(__dirname, "..", "fields", "Edge", "Team");

    const edgesFiles = fs.readdirSync(EDGE_DIR);

    for (const edge of edgesFiles) {
      const EDGE_FILE = path.join(EDGE_DIR, edge);

      const module = require(EDGE_FILE);

      edges = { ...edges, ...module };
    }

    return {
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

      ...edges,
    };
  },
});
