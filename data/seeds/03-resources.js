exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'resource name A', description: 'resource desc A'},
    { name: 'resource name B', description: 'resource desc B'},
    { name: 'resource name C', description: 'resource desc C'},
    { name: 'resource name D', description: 'resource desc D'},
    { name: 'resource name E', description: 'resource desc E'},
    { name: 'resource name F', description: 'resource desc F'},
    { name: 'resource name G', description: 'resource desc G'}
  ])
}