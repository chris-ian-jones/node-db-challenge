exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'res name 1', description: 'res des1' },
    { name: 'res name 2', description: 'res des2' },
    { name: 'res name 3', description: 'res des3' },
    { name: 'res name 4', description: 'res des4' },
    { name: 'res name 5', description: 'res des5' },
    { name: 'res name 6', description: 'res des6' },
    { name: 'res name 7', description: 'res des7' }
  ])
}