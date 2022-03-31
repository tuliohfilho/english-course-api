import { Router } from "express";

import { GetAllOnPronounciationsController } from "../modules/onPronounciations/useCases/getAllOnPronounciationTypes";

const onPronounciationRoutes = Router();

const getAllOnPronounciationsController =
  new GetAllOnPronounciationsController();
onPronounciationRoutes.get("/types", getAllOnPronounciationsController.handle);

export { onPronounciationRoutes };
