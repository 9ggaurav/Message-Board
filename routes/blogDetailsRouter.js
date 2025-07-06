// Routes to /messages/id to display the details about any blog

const { Router } = require('express');
const { blogDetailsControllerGet } = require('../controllers/blogDetailsController');
const blogDetailsRouter = Router();

blogDetailsRouter.get("/:id", blogDetailsControllerGet);

module.exports = blogDetailsRouter;