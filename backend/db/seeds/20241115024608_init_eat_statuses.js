/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("eatStatuses").del();
  await knex("eatStatuses").insert([
    { id: 1, userName: "a太", date: "2024-12-01", eatStatus: true },
    { id: 2, userName: "a太", date: "2024-12-02", eatStatus: true },
    { id: 3, userName: "a太", date: "2024-12-03", eatStatus: true },
    { id: 4, userName: "b介", date: "2024-12-01", eatStatus: true },
    { id: 5, userName: "b介", date: "2024-12-02", eatStatus: true },
    { id: 6, userName: "b介", date: "2024-12-03", eatStatus: true },
    { id: 7, userName: "c子", date: "2024-12-01", eatStatus: true },
    { id: 8, userName: "c子", date: "2024-12-02", eatStatus: true },
    { id: 9, userName: "c子", date: "2024-12-03", eatStatus: true },
  ]);
};
