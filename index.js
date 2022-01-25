const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

const irrVerbsRoutes = require('./routes/irregularVerbsRoutes');
app.use('/irregular-verbs', irrVerbsRoutes);

const presentPerfectRoutes = require('./routes/presentPerfectRoutes');
app.use('/present-perfect', presentPerfectRoutes);

app.listen(5000);