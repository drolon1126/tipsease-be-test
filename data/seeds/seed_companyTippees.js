const createFakeEntry = i => ({
  company_id: i,
  address_id: i
});

exports.seed = async function(knex, Promise) {
  await knex('companiesaddresses').truncate();

  const desiredFakeEntries = 50;
  const fakeEntries = [];

  for (let i = 0; i < desiredFakeEntries; i++) {
    fakeEntries.push(createFakeEntry(i));
  }
};
