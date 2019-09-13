exports.seed = function(knex) {
  return knex('tasks').insert([
    // project_id must match valid id for a project
    { description: 'st des1', notes: 'st n1', completed: false, project_id: 1 },
    { description: 'st des2', notes: 'st n2', completed: true, project_id: 2 },
    { description: 'st des2', completed: false, project_id: 2 },
    { description: 'st des3', notes: 'st n3', completed: false, project_id: 3 },
    { description: 'st des3', completed: false, project_id: 3 },
    { description: 'st des3', notes: 'st n3', completed: true, project_id: 3 }
  ])
}