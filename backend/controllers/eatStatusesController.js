const eatStatusesModel = require("../models/eatStatusesModel");

exports.findAll = async (req, res) => {
  try {
    const eatStatuses = await eatStatusesModel.findAll();
    const result = eatStatuses.reduce((acc, { userName, date, eatStatus }) => {
      if (!acc[userName]) {
        acc[userName] = {};
      }

      if (eatStatus === true) {
        eatStatus = "⚪︎";
      } else {
        eatStatus = " ";
      }

      acc[userName][date] = eatStatus;
      return acc;
    }, {});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get eatStatuses" });
  }
};

exports.patchStatuses = async (req, res) => {
  const userName = req.query.userName;
  const date = req.query.date;
  const eatStatus = req.query.eatStatus;

  try {
    await eatStatusesModel.patchStatuses(userName, date, eatStatus);
    res.status(200).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to patch eatStatuses" });
  }
};
