"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./shared/container");
const server_1 = require("./server");
const PORT = process.env.PORT || 5050;
server_1.app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
