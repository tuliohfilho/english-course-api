"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const irregular_verbs_routes_1 = require("./irregular-verbs.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/irregular-verbs", irregular_verbs_routes_1.irregularVerbRoutes);
//# sourceMappingURL=index.js.map