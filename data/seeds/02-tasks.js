exports.seed = function(knex) {
  return knex('tasks').insert([
    // project_id must match valid id for a project
    { description: 'task desc u', notes: 'task notes u', completed: false, project_id: 1 },
    { description: 'task desc v', notes: 'task notes v', completed: true, project_id: 2 },
    { description: 'task desc w', completed: false, project_id: 2 },
    { description: 'task desc x', notes: 'task notes x', completed: false, project_id: 3 },
    { description: 'task desc y', completed: false, project_id: 3 },
    { description: 'task desc z', notes: 'task notes z', completed: true, project_id: 3 }
  ])
}