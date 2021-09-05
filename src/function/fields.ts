import {
  GraphQLFieldConfig,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldResolver,
  GraphQLList,
  GraphQLNonNull,
  GraphQLOutputType,
  Source,
} from "graphql";
import { Context } from "../types/Context";

export interface CreateFieldProps<Source, Context, Args> {
  type: GraphQLOutputType;
  resolve: GraphQLFieldResolver<Source, Context, Args>;
  args?: GraphQLFieldConfigArgumentMap;
}

export const createField =
  <Context>() =>
  <Source = null, Args = Record<string, never>>({
    type,
    resolve,
    args,
  }: CreateFieldProps<Source, Context, Args>): GraphQLFieldConfig<
    Source,
    Context,
    Args
  > => ({
    type,
    resolve,
    args,
  });

export const field = createField<Context>();
