const faker = require('faker');

const posRole = ['Bartender','Server','Waiter','Valet','Bellhop'];

const createFakeTippee = i => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  photo_url_id: i,
  start_date: faker.date.past(),
  email: faker.internet.email(),
  tagline: posRole[Math.floor(Math.random()*posRole.length)],
  password: 'randomHash'
});

exports.seed = async function(knex, Promise) {
  await knex('tippees').truncate();

  const fakeTippees = [];
  const desiredFakeTippees = 50;

  for (let i = 0; i < desiredFakeTippees; i++) {
    fakeTippees.push(createFakeTippee(i));
  }

  await knex('tippees').insert(fakeTippees);
};
