import { Router } from "express";

import { GetAllPresentPerfectTypesController } from "../modules/presentPerfects/useCases/getAllPresentPerfectTypes";

const presentPerfetcRoutes = Router();

const getAllPresentPerfectTypesController =
  new GetAllPresentPerfectTypesController();
presentPerfetcRoutes.get("/types", getAllPresentPerfectTypesController.handle);

export { presentPerfetcRoutes };
