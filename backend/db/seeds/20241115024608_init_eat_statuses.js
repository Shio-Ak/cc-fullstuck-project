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
    { id: 4, userName: "a太", date: "2024-12-04", eatStatus: true },
    { id: 5, userName: "a太", date: "2024-12-05", eatStatus: true },
    { id: 6, userName: "a太", date: "2024-12-06", eatStatus: true },
    { id: 7, userName: "a太", date: "2024-12-07", eatStatus: true },
    { id: 8, userName: "a太", date: "2024-12-08", eatStatus: true },
    { id: 9, userName: "a太", date: "2024-12-09", eatStatus: true },
    { id: 10, userName: "a太", date: "2024-12-10", eatStatus: true },
    { id: 11, userName: "b介", date: "2024-12-01", eatStatus: true },
    { id: 12, userName: "b介", date: "2024-12-02", eatStatus: true },
    { id: 13, userName: "b介", date: "2024-12-03", eatStatus: true },
    { id: 14, userName: "b介", date: "2024-12-04", eatStatus: true },
    { id: 15, userName: "b介", date: "2024-12-05", eatStatus: true },
    { id: 16, userName: "b介", date: "2024-12-06", eatStatus: true },
    { id: 17, userName: "b介", date: "2024-12-07", eatStatus: true },
    { id: 18, userName: "b介", date: "2024-12-08", eatStatus: true },
    { id: 19, userName: "b介", date: "2024-12-09", eatStatus: true },
    { id: 20, userName: "b介", date: "2024-12-010", eatStatus: true },
    { id: 21, userName: "c子", date: "2024-12-01", eatStatus: true },
    { id: 22, userName: "c子", date: "2024-12-02", eatStatus: true },
    { id: 23, userName: "c子", date: "2024-12-03", eatStatus: true },
    { id: 24, userName: "c子", date: "2024-12-04", eatStatus: true },
    { id: 25, userName: "c子", date: "2024-12-05", eatStatus: true },
    { id: 26, userName: "c子", date: "2024-12-06", eatStatus: true },
    { id: 27, userName: "c子", date: "2024-12-07", eatStatus: true },
    { id: 28, userName: "c子", date: "2024-12-08", eatStatus: true },
    { id: 29, userName: "c子", date: "2024-12-09", eatStatus: true },
    { id: 30, userName: "c子", date: "2024-12-10", eatStatus: true },
  ]);
};
