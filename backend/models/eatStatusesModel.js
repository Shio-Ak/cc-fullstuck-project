const knex = require("../db/knex");

module.exports = {
  async findAll() {
    return knex
      .select(
        "id",
        "userName",
        knex.raw("to_char(date, 'YYYY-MM-DD') as date"),
        "eatStatus"
      )
      .from("eatStatuses");
  },

  async patchStatuses(userName, date, eatStatus) {
    await knex("eatStatuses")
      .where({ userName: userName, date: date })
      .update({ eatStatus: eatStatus });
  },
};
