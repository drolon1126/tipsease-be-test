exports.up = function(knex, Promise) {
  return knex.schema.createTable('tips', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();

    //other keys
    tbl
      .integer('tipper_id')
      .notNullable()
      .references('id')
      .inTable('tippers');
    tbl
      .integer('tippee_id')
      .notNullable()
      .references('id')
      .inTable('tippees');
    tbl.float('amount').notNullable();
    tbl.date('date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tips');
};
