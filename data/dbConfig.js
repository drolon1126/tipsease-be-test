const knex = require('knex');

const config = require('../knexfile');

const environnment = 'development';

module.exports = knex(config[environnment]);
