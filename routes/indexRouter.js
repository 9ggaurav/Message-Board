// The homepage ( / ) of the blog which displays all the blogs present

const { Router } = require('express');
const { displayAllMessagesGet } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get("/", displayAllMessagesGet)

module.exports = indexRouter;