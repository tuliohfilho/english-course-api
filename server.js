"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./src/shared/container");
const src_1 = require("./src");
const PORT = process.env.PORT || 5050;
src_1.app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
