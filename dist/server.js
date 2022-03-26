"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./shared/container");
const _1 = require(".");
const PORT = process.env.PORT || 5050;
_1.app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
