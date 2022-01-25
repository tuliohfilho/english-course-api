const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

const irrVerbsRoutes = require('./api/routes/irregularVerbsRoutes');
app.use('/irregular-verbs', irrVerbsRoutes);

const presentPerfectRoutes = require('./api/routes/presentPerfectRoutes');
app.use('/present-perfect', presentPerfectRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));