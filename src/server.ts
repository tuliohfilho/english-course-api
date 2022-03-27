import "reflect-metadata";
import "./shared/container";

import { app } from ".";

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
