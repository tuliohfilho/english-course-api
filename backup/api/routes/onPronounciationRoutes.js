const router = require("express").Router();

const { getAll } = require("../controllers/onPronounciationController");

router.get("/", getAll);

module.exports = router;
