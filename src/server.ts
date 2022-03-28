import express from "express";
import swagger from "swagger-ui-express";

import { appErrorValidation } from "./middlewares/appErrorValidation";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(router);
app.use("/", swagger.serve, swagger.setup(swaggerFile));
app.use(appErrorValidation);

export { app };
