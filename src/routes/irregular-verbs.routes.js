"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.irregularVerbRoutes = void 0;
const express_1 = require("express");
const getAll_1 = require("../modules/irregularVerbs/useCases/getAll");
const irregularVerbRoutes = (0, express_1.Router)();
exports.irregularVerbRoutes = irregularVerbRoutes;
const getAllIrregularVerbsController = new getAll_1.GetAllIrregularVerbsController();
irregularVerbRoutes.get("/", getAllIrregularVerbsController.handle);
//# sourceMappingURL=irregular-verbs.routes.js.map