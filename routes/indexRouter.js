const { Router } = require('express');
const messages = require('../messagesDB.js');
const {nanoid} = require('nanoid');

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("form");
})

indexRouter.post("/", (req, res) => {
    const {author, message} = req.body;
    messages.push({ id: nanoid(), text: message, user: author, added: new Date().toISOString().split('T')[0] });
    res.redirect("/");
    console.log(messages);
})

module.exports = indexRouter;