const { Pool } = require("pg");
require('dotenv').config()

const LOCAL_POSTGRES_ROLE = process.env.LOCAL_POSTGRES_ROLE;
const LOCAL_POSTGRES_PASSWORD = process.env.LOCAL_POSTGRES_PASSWORD;

module.exports = new Pool({
  connectionString: `postgresql://${LOCAL_POSTGRES_ROLE}:${LOCAL_POSTGRES_PASSWORD}@localhost:5432/blog_db`
});
