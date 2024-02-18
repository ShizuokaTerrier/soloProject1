/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('scores', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('user_table').onDelete('CASCADE');
        table.integer('score').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.index(['user_id', 'created_at']); 
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('scores');
};
