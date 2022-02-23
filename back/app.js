const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
const db = require("./models");
const path = require('path');
const helmet = require("helmet");
const session = require('express-session')

const authRoutes = require('./routes/user')
const PostRoutes = require('./routes/main')

db.sequelize.sync()
    .then(() => console.log("Db synchronized."))
    .catch(() => console.log("Sequelize failed."))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
//helmet for html/express vulnerability

app.use(helmet())

//express-session for cookies vulnerability

app.set('trust proxy', 1) // trust first proxy
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/auth', authRoutes)
app.use('/api', PostRoutes)

module.exports = app;