import { Router } from "express";

import { GetAllIrregularVerbsController } from "../modules/irregularVerbs/useCases/getAll";

const irregularVerbRoutes = Router();

const getAllIrregularVerbsController = new GetAllIrregularVerbsController();
irregularVerbRoutes.get("/", getAllIrregularVerbsController.handle);

export { irregularVerbRoutes };
