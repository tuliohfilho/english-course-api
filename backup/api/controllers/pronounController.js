const allPronouns = require("../data/pronouns.json");
const allPronounsTypes = require("../data/pronounsTypes.json");
const allPronounsCaregories = require("../data/pronounsCategories.json");

exports.getAllPronounsCategories = (req, res) => {
  try {
    res.status(200).json(allPronounsCaregories);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getPronounsTypesByCategoryId = (req, res) => {
  try {
    const { id } = req.params;

    const pronounsCategoryId = allPronounsTypes.filter(
      (p) => p.categoryId == id
    );

    const pronounsTypes = pronounsCategoryId.map((type) => {
      const pronouns = allPronouns.filter((p) => p.typeId == type.id);

      type.pronouns = pronouns;

      return type;
    });

    res.status(200).json(pronounsTypes);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
