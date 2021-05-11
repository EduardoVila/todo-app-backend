const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')
const server = express()
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, () => {
  console.log(`RUNNING ON PORT ${port}.`)
})

module.exports = server
