exports.up = function (knex) {
  return knex.schema.createTable("eatStatuses", (table) => {
    table.increments("id").primary();
    table.string("userName", 64).notNullable();
    table.date("date").notNullable();
    table.boolean("eatStatus").notNullable().defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("eatStatuses");
};
