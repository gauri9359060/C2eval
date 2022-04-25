const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userCotroller = require('../controllers/user')

app.use(bodyParser.json([]))
app.get('/user',userCotroller.getAllUsers)

module.exports = app;