import "reflect-metadata";
import "express-async-errors";

import "./shared/container";

import { app } from "./server";

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
