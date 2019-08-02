exports.up = function(knex, Promise) {
  return knex.schema.createTable('tippees', tbl => {
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

    tbl.date('start_date');

    tbl.string('email').notNullable();
    tbl.string('role');
    tbl.text('tagline'); //optional
    tbl.string('password').notNullable();
    tbl.string('qr_url'); //optional
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tippees');
};
