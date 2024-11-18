const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const expect = chai.expect;
const app = require("../server");
const eatStatusesModel = require("../models/eatStatusesModel");
const knex = require("../db/knex");

chai.use(chaiHttp);

describe("eatStatuses API", async () => {
  let sandbox;
  let request;

  before(() => {
    request = chai.request(app).keepOpen();
  });

  after(() => {
    request.close();
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    try {
      async function patchStatuses(userName, date, eatStatus) {
        await knex("eatStatuses")
          .where({ userName: userName, date: date })
          .update({ eatStatus: eatStatus });
      }
      patchStatuses("a太", "2024-12-01", "true");
      patchStatuses("a太", "2024-12-02", "true");
      patchStatuses("a太", "2024-12-03", "true");
      patchStatuses("b介", "2024-12-01", "true");
      patchStatuses("b介", "2024-12-02", "true");
      patchStatuses("b介", "2024-12-03", "true");
      patchStatuses("c子", "2024-12-01", "true");
      patchStatuses("c子", "2024-12-02", "true");
      patchStatuses("c子", "2024-12-03", "true");
    } catch (err) {
      console.log(err);
    }
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("/api/statusesへのGETのリクエストでDB参照し全userName, date, eatStatusの情報を返す。", () => {
    it("参照に成功したら200のステータスコードを返す。", async () => {
      // Setup
      const mockEatStatuses = {
        a太: {
          "2024-12-01": "⚪︎",
          "2024-12-02": "⚪︎",
          "2024-12-03": "⚪︎",
        },
        b介: {
          "2024-12-01": "⚪︎",
          "2024-12-02": "⚪︎",
          "2024-12-03": "⚪︎",
        },
        c子: {
          "2024-12-01": "⚪︎",
          "2024-12-02": "⚪︎",
          "2024-12-03": "⚪︎",
        },
      };

      // Execute
      const res = await request.get("/api/statuses");

      // Assert
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(mockEatStatuses);
    });

    it("参照に失敗したら500のステータスコードを返す。", async () => {
      // Setup
      sandbox
        .stub(eatStatusesModel, "findAll")
        .rejects(new Error("Database Error"));

      // Execute
      const res = await request.get("/api/statuses");

      // Assert
      expect(res).to.have.status(500);
      expect(res.body).to.have.property("error", "Failed to get eatStatuses");
    });
  });

  describe("/api/statusesへのPATCHのリクエストでuserName, date, eatStatusの情報をクエリパラメータで受け取りDBに登録する。", () => {
    it("登録に成功したら200のステータスコードを返す。", async () => {
      // Setup
      const userName = "a太";
      const date = "2024-12-01";
      const eatStatus = "false";

      const mockEatStatuses = {
        a太: {
          "2024-12-01": " ",
          "2024-12-02": "⚪︎",
          "2024-12-03": "⚪︎",
        },
        b介: {
          "2024-12-01": "⚪︎",
          "2024-12-02": "⚪︎",
          "2024-12-03": "⚪︎",
        },
        c子: {
          "2024-12-01": "⚪︎",
          "2024-12-02": "⚪︎",
          "2024-12-03": "⚪︎",
        },
      };

      // Execute
      const res = await request.patch(
        `/api/statuses?userName=${encodeURIComponent(
          userName
        )}&date=${date}&eatStatus=${eatStatus}`
      );
      const res2 = await request.get("/api/statuses");

      // Assert
      expect(res).to.have.status(200);
      expect(res2.body).to.deep.equal(mockEatStatuses);
    });

    it("登録に失敗したら500のステータスコードを返す。", async () => {
      // Setup
      const userName = "a太";
      const date = "2024-12-01";
      const eatStatus = "true";
      sandbox
        .stub(eatStatusesModel, "patchStatuses")
        .rejects(new Error("Database Error"));

      // Execute
      const res = await request.patch(
        `/api/statuses?userName=${encodeURIComponent(
          userName
        )}&date=${date}&eatStatus=${eatStatus}`
      );

      // Assert
      expect(res).to.have.status(500);
      expect(res.body).to.have.property("error", "Failed to patch eatStatuses");
    });
  });
});
