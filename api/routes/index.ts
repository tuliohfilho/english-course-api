import { Router } from "express";

import { irregularVerbRoutes } from "./irregular-verbs.routes";

const router = Router();

router.use("/irregular-verbs", irregularVerbRoutes);

export { router };
