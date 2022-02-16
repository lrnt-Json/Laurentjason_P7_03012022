const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
const db = require("./models");

const authRoutes = require('./routes/user')

db.sequelize.sync()
    .then(() => console.log("Db synchronized."))
    .catch(() => console.log("Sequelize failed."))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/auth', authRoutes)

module.exports = app;