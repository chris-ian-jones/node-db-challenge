exports.seed = function(knex) {
  return knex('tasks').insert([
    // project_id must match valid id for a project
    { description: 'task des1', notes: 'task n1', completed: false, project_id: 1 },
    { description: 'task des2', notes: 'task n2', completed: true, project_id: 2 },
    { description: 'task des2', completed: false, project_id: 2 },
    { description: 'task des3', notes: 'task n3', completed: false, project_id: 3 },
    { description: 'task des3', completed: false, project_id: 3 },
    { description: 'task des3', notes: 'task n3', completed: true, project_id: 3 }
  ])
}