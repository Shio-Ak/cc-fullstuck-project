const eatStatusesModel = require("../models/eatStatusesModel");

exports.findAll = async (req, res) => {
  try {
    const eatStatuses = await eatStatusesModel.findAll();
    const result = eatStatuses.reduce((acc, { userName, date, eatStatus }) => {
      if (!acc[userName]) {
        acc[userName] = {};
      }
      acc[userName][date] = eatStatus.toString();
      return acc;
    }, {});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to get eatStatuses" });
  }
};
