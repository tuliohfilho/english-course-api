import { Router } from "express";

import { GetAllPronounsController } from "../modules/pronouns/useCases/getAll";

const pronounRoutes = Router();

const getAllPronounsController = new GetAllPronounsController();
pronounRoutes.get("/", getAllPronounsController.handle);

export { pronounRoutes };
