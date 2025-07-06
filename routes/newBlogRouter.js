// Routes to /new to display new form to add blog on get and post.

const { Router } = require('express');
const { newBlogControllerGet, newBlogControllerPost } = require('../controllers/newBlogController.js');

const newBlogRouter = Router();

newBlogRouter.get("/", newBlogControllerGet);
newBlogRouter.post("/", newBlogControllerPost);

module.exports = newBlogRouter;