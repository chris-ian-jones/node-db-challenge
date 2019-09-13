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
    res.status(200).json(formattedProjects)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' })
  })
})

router.post('/', (req, res) => {
  const newProject = req.body

  Projects.addProject(newProject)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(err => {
    res.status(500).json({ message: 'Error adding project to database' })
  })
})

module.exports = router