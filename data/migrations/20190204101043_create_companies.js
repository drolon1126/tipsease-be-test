exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', tbl => {
    //primary key: id (autoincre)
    tbl.increments();

    //other keys

    tbl.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies');
};
