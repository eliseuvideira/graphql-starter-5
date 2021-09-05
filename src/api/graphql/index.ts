import {
  GraphQLFieldConfigMap,
  GraphQLObjectType,
  GraphQLSchema,
  Thunk,
} from "graphql";
import path from "path";
import fs from "fs";

const types = [];

const TYPES_FOLDER = path.join(__dirname, "types");
const typesFiles = fs.readdirSync(TYPES_FOLDER);

for (const file of typesFiles) {
  const module = require(path.join(TYPES_FOLDER, file));

  for (const key of Object.keys(module)) {
    types.push(module[key]);
  }
}

const fields: Thunk<GraphQLFieldConfigMap<any, any>> = {};

const QUERY_FIELDS_FOLDER = path.join(__dirname, "fields", "Query");

const fieldsFolders = fs.readdirSync(QUERY_FIELDS_FOLDER);

for (const folder of fieldsFolders) {
  const QUERY_FIELDS_TYPE_FOLDER = path.join(QUERY_FIELDS_FOLDER, folder);

  const fieldsFile = fs.readdirSync(QUERY_FIELDS_TYPE_FOLDER);

  for (const file of fieldsFile) {
    const filepath = path.join(QUERY_FIELDS_TYPE_FOLDER, file);

    const module = require(filepath);

    for (const key of Object.keys(module)) {
      fields[key] = module[key];
    }
  }
}

const query = new GraphQLObjectType({
  name: "Query",
  fields,
});

export const schema = new GraphQLSchema({
  query,
  types,
});
