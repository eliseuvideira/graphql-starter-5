const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.withSchema("owl").createTable("teams", (table) => {
    // Fields
    table.increments("teamId", { primaryKey: false }).notNullable();
    table.text("name").notNullable();
    table.text("city").notNullable();
    table.text("location").notNullable();
    table.text("region").notNullable();
    table.specificType("colors", "text[]").notNullable();
    table.boolean("active").notNullable().defaultTo(true);
    table.dateTime("createdAt").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updatedAt").notNullable().defaultTo(knex.fn.now());

    // Primary Key
    table.primary(["teamId"]);
  });

  await knex.raw(`
    create trigger "tr_owl_teams_setUpdatedAt"
    before update on "owl"."teams"
    for each row
    execute procedure "setUpdatedAt"();
  `);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.withSchema("owl").dropTable("teams");
};
