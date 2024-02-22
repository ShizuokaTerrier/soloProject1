# Listen Up Web App

A clear and simple web app to help EFL students improve listening ability and pronunciation awareness.

This is a PERNK application (Postgresql, Express, React, Node.js, and Knex.js).

# Getting Started

1. Fork this repository
2. Clone your forked repository
3. Install the NPM packages

- npm

  ```sh
  npm install npm@latest -g
  ```

  ```sh
  npm i bcrypt cors dotenv express knex pg
  ```

4. When running the app locally you will need to create your own database in PostgreSQL. You can configure the table and create your own data through Knex migrations and seeds.Don't forget to update the details in the knexJS file to match your new database info.

5. Be sure to create your own dotenv file to manage your connection strings.

6. To run the web app locally on React cd into soloProjectFrontend and input:

```sh
npm install
npm run dev
```
