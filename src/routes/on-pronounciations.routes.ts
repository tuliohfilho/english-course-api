import { Router } from "express";

import { GetAllOnPronounciationsController } from "../modules/onPronounciations/useCases/getAll";

const onPronounciationRoutes = Router();

const getAllOnPronounciationsController =
  new GetAllOnPronounciationsController();
onPronounciationRoutes.get("/", getAllOnPronounciationsController.handle);

export { onPronounciationRoutes };
