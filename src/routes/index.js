const express = require('express')
const controller = require('../controllers/index')

const appRouter = express.Router()

appRouter.get('/files/data', controller)
appRouter.get('/files/list', controller)

module.exports = appRouter
