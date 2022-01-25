const getAllDate = require('../data/irregular-verbs');

exports.getAll = (req, res) => {
    try {
        res.status(200).json(getAllDate);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}