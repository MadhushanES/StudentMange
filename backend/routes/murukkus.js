const express = require('express')

const app = express()

const Muruk = require('../controller/murukku')

const router = express.Router()

router.get('/murukku', Muruk)

module.exports = router