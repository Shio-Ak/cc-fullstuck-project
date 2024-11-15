const eatStatusesModel = require("../models/eatStatusesModel");

exports.findAll = async (req, res) => {
  try {
    const eatStatuses = await eatStatusesModel.findAll();
    res.status(200).json(eatStatuses);
  } catch (err) {
    res.status(500).json({ error: "Failed to get eatStatuses" });
  }
};
