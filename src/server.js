const express = require('express')
const app = require('./app')
const dotenv = require('dotenv')

const connectDataBae = require('./config/database.config')

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`servidor rodando em modo ${process.env.NODE_ENV} Na porta ${PORT}`)
)