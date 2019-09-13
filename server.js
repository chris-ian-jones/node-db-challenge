const express = require('express')

const ProjectRouter = require('./propjects/project-router.js')

const server = express()

server.use(express.json())

server.use('/api/projects', PropjectRputer)

module.exports = server