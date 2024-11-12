const { insertManyFunkos, getAllFunkos } = require('../controllers/funko')

const express = require('express')

const funkoRouter = express.Router()

funkoRouter.post('/insertFunkos', insertManyFunkos)
funkoRouter.get('/', getAllFunkos)

module.exports = funkoRouter
