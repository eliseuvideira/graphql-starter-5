const { Knex } = require("knex");

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.withSchema("owl").createTable("teamsPlayers", (table) => {
    // Fields
    table.text("teamId").notNullable();
    table.integer("playerId").notNullable();

    // Primary Key
    table.primary(["teamId", "playerId"]);

    // Foreign Keys
    table
      .foreign("teamId")
      .references("teamId")
      .inTable("owl.teams")
      .onDelete("cascade")
      .onUpdate("cascade");
    table
      .foreign("playerId")
      .references("playerId")
      .inTable("owl.players")
      .onDelete("cascade")
      .onUpdate("cascade");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await knex.schema.withSchema("owl").dropTable("teamsPlayers");
};
