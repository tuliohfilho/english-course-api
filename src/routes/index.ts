import { Router } from "express";

import { irregularVerbRoutes } from "./irregular-verbs.routes";
import { onPronounciationRoutes } from "./on-pronounciations.routes";
import { presentPerfetcRoutes } from "./present-perfetcs.routes";
import { pronounRoutes } from "./pronouns.routes";

const router = Router();

router.use("/irregular-verb", irregularVerbRoutes);
router.use("/on-pronounciation", onPronounciationRoutes);
router.use("/on-pronounciation", presentPerfetcRoutes);
router.use("/on-pronounciation", pronounRoutes);
export { router };
