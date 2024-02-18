/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("user_table", function (table){
    table.increments().primary();
    table.string('username').unique().notNullable();
    table.string('email', 100).notNullable();
    table.string('password', 255).notNullable();
    table.timestamps(true, true);
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user_table");
};
