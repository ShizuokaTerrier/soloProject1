// Update with your config settings.
require('dotenv').config({path: './.env'});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.LOCALDB_NAME,
      user:     process.env.LOCALDB_USER,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL ||{
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};

