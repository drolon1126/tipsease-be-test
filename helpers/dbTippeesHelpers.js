const db = require('../data/dbConfig');

const getTippees = () => {
  return db
    .select(
      'id',
      'first_name',
      'last_name',
      'email',
      'photo_url',
      'role',
      'tagline',
      'start_date'
    )
    .from('tippees');
};

const getByTippeeId = id => {
  return db('tippees')
    .where('tippees.id', id)
    .select(
      'tippees.id',
      'tippees.first_name',
      'tippees.last_name',
      'tippees.email',
      'tippees.photo_url',
      'tippees.role',
      'tippees.tagline',
      'tippees.start_date'
    );
};

const insertTippeeData = data => {
  // we need to be able to post whatever data is passed in into our db
  return db('tippees').insert(data);
};

const removeTippee = id => {
  return db('tippees')
    .where('tippees.id', id)
    .del();
};

const updateTippee = (id, data) => {
  return db('tippees')
    .where('tippees.id', id)
    .update(data);
};

///// FOR TIPS ////////

const getTipeeTips = id => {
  return db('tips').where('tips.tippee_id', id);
};

const addTip = tip => {
  //   return db('tips')
  //     .where('tippees.id', id)
  //     .insert(tip);

  return db('tips').insert(tip);
};

const getTippeeTipsAmount = id => {
  return db('tips')
    .where('tips.tippee_id', id)
    .sum('amount as amount');
};
module.exports = {
  getTippees,
  getByTippeeId,
  insertTippeeData,
  updateTippee,
  removeTippee,
  addTip,
  getTipeeTips,
  getTippeeTipsAmount
};
