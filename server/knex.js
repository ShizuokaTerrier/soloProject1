require('dotenv').config({path:"./env"});
const knex = require('knex');
const config = require('./knexfile')
const environment = process.env.NODE_ENV === "production" ? "production":"development";

module.exports = knex(config[environment]);