"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPronounciationRoutes = void 0;
const express_1 = require("express");
const getAll_1 = require("../modules/onPronounciations/useCases/getAll");
const onPronounciationRoutes = (0, express_1.Router)();
exports.onPronounciationRoutes = onPronounciationRoutes;
const getAllOnPronounciationsController = new getAll_1.GetAllOnPronounciationsController();
onPronounciationRoutes.get("/", getAllOnPronounciationsController.handle);
