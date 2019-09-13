const express = require('express')

const Tasks = require('./task-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Tasks.getTasks()
  .then(tasks => {
    const formattedTasks = tasks.map(task => (
      {
        ...task,
        completed: task.completed === 0 ? false : true
      }
    ))
    res.status(200).json(formattedTasks)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' })
  })
})

router.post('/', (req, res) => {
  const newTask = req.body

  Tasks.addTask(newTask)
  .then(task => {
    res.status(201).json(task)
  })
  .catch(err => {
    res.status(500).json({ message: 'Error adding task to database' })
  })
})

module.exports = router