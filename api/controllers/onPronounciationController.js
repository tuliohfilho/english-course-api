const getAllDate = require("../data/on-pronounciation.json");

exports.getAll = (req, res) => {
  try {
    res.status(200).json(getAllDate);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
