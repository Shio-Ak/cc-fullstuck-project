const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const expect = chai.expect;
const app = require("../server");
const eatStatusesModel = require("../models/eatStatusesModel");

chai.use(chaiHttp);

describe("eatStatuses API", () => {
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
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("/api/statusesへのGETのリクエストでDB参照し全userName, date, eatStatusの情報を返す。", () => {
    it("参照に成功したら200のステータスコードを返す。", async () => {
      // Setup
      const mockEatStatuses = [
        { id: 1, userName: "", date: "", eatStatus: "" },
        { id: 2, userName: "", date: "", eatStatus: "" },
      ];

      sandbox.stub(eatStatusesModel, "findAll").resolves(mockEatStatuses);

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
});
