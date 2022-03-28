import { Router } from "express";

import { irregularVerbRoutes } from "./irregular-verbs.routes";
import { onPronounciationRoutes } from "./on-pronounciations.routes";

const router = Router();

router.use("/irregular-verb", irregularVerbRoutes);
router.use("/on-pronounciation", onPronounciationRoutes);

export { router };
