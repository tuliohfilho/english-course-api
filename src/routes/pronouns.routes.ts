import { Router } from "express";

import {
  GetAllPronounCategoriesController,
  GetPronounTypesByCategoryIdController,
} from "../modules/pronouns";

const pronounRoutes = Router();

const getAllPronounCategoriesController =
  new GetAllPronounCategoriesController();
const getPronounTypesByCategoryIdController =
  new GetPronounTypesByCategoryIdController();

pronounRoutes.get("/categories", getAllPronounCategoriesController.handle);
pronounRoutes.get(
  "/category/:categoryId/types",
  getPronounTypesByCategoryIdController.handle
);

export { pronounRoutes };
