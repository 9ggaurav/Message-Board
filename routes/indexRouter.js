const { Router } = require('express');
const messages = require('../messagesDB.js');
const {nanoid} = require('nanoid');

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("form");
})

indexRouter.post("/", (req, res) => {
    const {author, message} = req.body;
    messages.push({ id: nanoid(), text: message, user: author, added: new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}), time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}) });
    res.redirect("/");
    console.log("messages", messages);
})


module.exports = indexRouter;