import { graphqlHTTP } from "express-graphql";
import { schema } from "../api/graphql";

export const graphql = () => graphqlHTTP({ schema });
