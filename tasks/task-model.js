const db = require('../data/db-config.js')

module.exports = {
  getTasks,
  addTask
}

function getTasks(){
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
}

function addTask(task){
  return db('tasks as t')
    .insert(task)
}