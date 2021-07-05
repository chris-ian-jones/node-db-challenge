exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'project A', description: 'description project A', completed: false},
    {name: 'project B', description: 'description project B', completed: false},
    {name: 'project C', completed: true}
  ])
}