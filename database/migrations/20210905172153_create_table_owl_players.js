const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.withSchema("owl").createTable("players", (table) => {
    // Fields
    table.increments("playerId", { primaryKey: false }).notNullable();
    table.text("name").notNullable();
    table.text("country").notNullable();
    table.specificType("signatureHeroes", "text[]");
    table.boolean("active").notNullable().defaultTo(true);
    table.dateTime("createdAt").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updatedAt").notNullable().defaultTo(knex.fn.now());

    // Primary Key
    table.primary(["playerId"]);
  });

  await knex.raw(`
    create trigger "tr_owl_players_setUpdatedAt"
    before update on "owl"."players"
    for each row
    execute procedure "setUpdatedAt"();
  `);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.withSchema("owl").dropTable("players");
};
