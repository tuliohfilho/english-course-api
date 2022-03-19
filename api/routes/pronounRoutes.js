const router = require("express").Router();

const { getAll } = require("../controllers/pronounController");

router.get("/", getAll);

module.exports = router;
