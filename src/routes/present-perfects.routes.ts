import { Router } from "express";

import { GetAllPresentPerfectsController } from "../modules/presentPerfects/useCases/getAll";

const presentPerfetcRoutes = Router();

const getAllPresentPerfectsController = new GetAllPresentPerfectsController();
presentPerfetcRoutes.get("/", getAllPresentPerfectsController.handle);

export { presentPerfetcRoutes };
