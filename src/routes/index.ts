import { Router } from "express";

import { irregularVerbRoutes } from "./irregular-verbs.routes";
import { onPronounciationRoutes } from "./on-pronounciations.routes";
import { presentPerfetcRoutes } from "./present-perfects.routes";
import { pronounRoutes } from "./pronouns.routes";

const router = Router();

router.use("/irregular-verb", irregularVerbRoutes);
router.use("/on-pronounciation", onPronounciationRoutes);
router.use("/present-perfect", presentPerfetcRoutes);
router.use("/pronoun", pronounRoutes);
export { router };
