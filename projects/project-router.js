const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Projects.getProjects()
  .then(projects => {
    const formattedProjects = projects.map(project => (
      {
        ...project,
        completed: project.completed === 0 ? 'false' : 'true'
      }
    ))
    res.json(formattedProjects)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' })
  })
})

module.exports = router