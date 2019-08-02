exports.up = function(knex, Promise) {
  return knex.schema.createTable('tippers', tbl => {
    // primary key: id (autoincrements)
    tbl.increments();
    // other keys

    tbl
      .string('first_name')

      .notNullable();
    tbl.string('last_name').notNullable();
    tbl
      .string('photo_url')
      .defaultTo(
        'https://res.cloudinary.com/drkfk1jtk/image/upload/q_100/v1549379225/default.png'
      );
    tbl.string('photo_url_id');
    tbl
      .string('email')
      .notNullable()
      .unique();
    tbl.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tippers');
};
