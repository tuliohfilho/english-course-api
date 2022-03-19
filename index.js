const express = require("express");
const app = express();

app.use(function (req, res, next) {
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

const irrVerbsRoutes = require("./api/routes/irregularVerbsRoutes");
app.use("/irregular-verbs", irrVerbsRoutes);

const presentPerfectRoutes = require("./api/routes/presentPerfectRoutes");
app.use("/present-perfect", presentPerfectRoutes);

const onPronounciationRoutes = require("./api/routes/onPronounciationRoutes");
app.use("/on-pronounciation", onPronounciationRoutes);

const pronounRoutes = require("./api/routes/pronounRoutes");
app.use("/pronoun", pronounRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
