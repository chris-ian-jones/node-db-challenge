exports.up = function(knex) {
  return knex.schema
  // Projects
  .createTable('projects', tbl => {
    tbl.increments()
    tbl.string('name', 255).notNullable()
    tbl.string('description', 4000)
    tbl.boolean('completed').notNullable().defaultTo(false)
  })

  // Tasks
  .createTable('tasks', tbl => {
    tbl.increments()
    tbl.string('description').notNullable()
    tbl.string('notes', 4000)
    tbl.boolean('completed').notNullable().defaultTo(false)

    // Foreign Key pointing to primary key of Projects
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

  // Resources
  .createTable('resources', tbl => {
    tbl.increments()
    tbl.string('name', 255).notNullable().unique()
    tbl.string('description', 4000)
  })

  // 'Intermediary' table for 'Many to Many' relationship between Projects And Resources
  .createTable('projects_resources', tbl => {

    // Foreign Keys pointing to primary keys of Projects & Resources
    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // 'Composite' primary key consisting of primary keys of Projects & Resources
      tbl.primary(['project_id', 'resource_id'])
  })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
}
