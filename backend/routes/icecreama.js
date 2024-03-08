const express = require('express')

const IceCream = require('../controller/icecream')

const rout = express.Router()

rout.get('/icecream', IceCream)

module.exports = rout