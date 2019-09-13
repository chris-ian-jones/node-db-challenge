const express = require('express')

const Resources = require('./resource-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Resources.getResources()
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' })
  })
})

router.post('/', (req, res) => {
  const newResource = req.body

  Resources.addResource(newResource)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(err => {
    res.status(500).json({ message: 'Error adding resource to database' })
  })
})

module.exports = router