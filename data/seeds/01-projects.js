exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'pro1', description: 'desccription p1', completed: false},
    {name: 'pro2', description: 'desccription p2', completed: false},
    {name: 'pro3', completed: true}
  ])
}