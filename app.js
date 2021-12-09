const dotenv = require('dotenv').config()
const express = require('express'); //importer le paquet express
const app = express(); //creer une application express
const apiRouter = require('./routes/apiRouter').router;

app.use('/api/', apiRouter);

module.exports = app;