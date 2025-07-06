#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config()

const LOCAL_POSTGRES_ROLE = process.env.LOCAL_POSTGRES_ROLE;
const LOCAL_POSTGRES_PASSWORD = process.env.LOCAL_POSTGRES_PASSWORD;

const SQL = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS users;

-- USERS table
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL UNIQUE
);

-- BLOGS table
CREATE TABLE blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blog_title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample users
INSERT INTO users (user_id, username) VALUES
  (gen_random_uuid(), 'alice'),
  (gen_random_uuid(), 'bob'),
  (gen_random_uuid(), 'charles');

`;

const environment = process.argv[2];

async function main(){
    if(environment === 'local'){
        console.log(`Seeding ${environment} ....`);
        let client;
        try{
            client = new Client({
            connectionString: `postgresql://${LOCAL_POSTGRES_ROLE}:${LOCAL_POSTGRES_PASSWORD}@localhost:5432/blog_db`
            });
            await client.connect();
            await client.query(SQL);
        }catch(error){
            console.log("Seeding failed : ", error);
        }finally{
            if (client){
                await client.end();
                console.log("done");
            }
        }
    }
}

main();