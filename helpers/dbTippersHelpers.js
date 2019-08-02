const db = require('../data/dbConfig');

const getTippers = () => {
  return db
    .select('id', 'first_name', 'last_name', 'email', 'photo_url')
    .from('tippers');
};

const getByTipperId = id => {
  return db('tippers')
    .where('tippers.id', id)
    .select(
      'tippers.id',
      'tippers.first_name',
      'tippers.last_name',
      'tippers.email',
      'tippers.photo_url'
    );
};

const insertTipperData = data => {
  // we need to be able to post whatever data is passed in into our db
  return db('tippers').insert(data);
};

const removeTipper = id => {
  return db('tippers')
    .where('tippers.id', id)
    .del();
};

const updateTipper = (id, data) => {
  return db('tippers')
    .where('tippers.id', id)
    .update(data);
};
module.exports = {
  getTippers,
  getByTipperId,
  insertTipperData,
  updateTipper,
  removeTipper
};
