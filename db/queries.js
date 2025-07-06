const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}


async function getAllForIndexPage() {
    const { rows } = await pool.query(`
        SELECT blogs.id, blogs.blog_title, blogs.content, blogs.image_url, users.username, TO_CHAR(created_at, 'FMMonth DD, YYYY HH12:MI AM') AS created_at
        from blogs
        join users on blogs.user_id = users.user_id;
        `);
    return rows;
}

async function insertNewBlogandUser(username, blog_title, content, image_url) {
  // 1. Try to insert user; ignore conflict if already exists
  await pool.query(`
    INSERT INTO users (username)
    VALUES ($1)
    ON CONFLICT (username) DO NOTHING
  `, [username]);

  // 2. Always fetch user_id
  const userResult = await pool.query(`
    SELECT user_id FROM users WHERE username = $1
  `, [username]);

  if (userResult.rows.length === 0) {
    throw new Error("Username insert failed and user not found.");
  }

  const userId = userResult.rows[0].user_id;

  // 3. Insert blog using fetched user_id
  await pool.query(`
    INSERT INTO blogs (blog_title, content, image_url, user_id)
    VALUES ($1, $2, $3, $4)
  `, [blog_title, content, image_url, userId]);
}


module.exports = {
    getAllUsernames,
    getAllForIndexPage,
    insertNewBlogandUser
}