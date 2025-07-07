const { Pool } = require("pg");
require('dotenv').config()

const LOCAL_POSTGRES_ROLE = process.env.LOCAL_POSTGRES_ROLE;
const LOCAL_POSTGRES_PASSWORD = process.env.LOCAL_POSTGRES_PASSWORD;
const PROD_POSTGRES_PASSWORD = process.env.PROD_POSTGRES_PASSWORD;

module.exports = new Pool({
  connectionString: `postgresql://neondb_owner:${PROD_POSTGRES_PASSWORD}@ep-tight-butterfly-a8twurt9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require`
});
