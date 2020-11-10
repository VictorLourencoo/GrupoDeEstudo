const express = require('express')

const app = express();

app.use(express.json())
require('./config/database.config')




module.exports = app;