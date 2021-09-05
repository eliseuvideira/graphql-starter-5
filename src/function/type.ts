import { GraphQLFieldConfig, GraphQLObjectType } from "graphql";
import { Context } from "../types/Context";
import path from "path";
import fs from "fs";

export interface CreateTypeProps<Source, Context> {
  name: string;
  description?: string;
  fields: () => { [K in keyof Source]: GraphQLFieldConfig<Source, Context> };
}

export const createType =
  <Context>() =>
  <Source>({ name, description, fields }: CreateTypeProps<Source, Context>) =>
    new GraphQLObjectType({
      name,
      description,
      fields: () => {
        let edges = {};

        const EDGE_DIR = path.join(
          __dirname,
          "..",
          "api",
          "graphql",
          "fields",
          "Edge",
          name
        );

        const edgesFiles = fs.readdirSync(EDGE_DIR);

        for (const edge of edgesFiles) {
          const EDGE_FILE = path.join(EDGE_DIR, edge);

          const module = require(EDGE_FILE);

          edges = { ...edges, ...module };
        }

        return { ...fields(), ...edges };
      },
    });

export const type = createType<Context>();
