require('dotenv').config({path:"./env"});
const knex = require('knex');
const config = require('./knexfile')

module.exports = process.env.NODE_ENV === 'production' ? knex(config['production']) : knex(config['development']);