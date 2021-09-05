import express from "express";
import cors from "cors";
import { exception, notFound } from "@ev-fns/errors";
import { graphql } from "./graphql";

export const middlewares = async (app: express.Express) => {
  app.use(cors());

  app.post("/graphql", graphql());

  app.use(notFound);
  app.use(exception);
};
