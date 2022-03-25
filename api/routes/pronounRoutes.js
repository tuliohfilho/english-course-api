const router = require("express").Router();

const {
  getAllPronounsCategories,
  getPronounsTypesByCategoryId,
} = require("../controllers/pronounController");

router.get("/categories", getAllPronounsCategories);
router.get("/category/:id/types", getPronounsTypesByCategoryId);

module.exports = router;
