// const messages = require("../messagesDB");
const db = require("../db/queries");

const blogDetailsControllerGet = async (req, res) => {
    const messages = await db.getAllForIndexPage();
    const message = messages.find(m => String(m.id) === req.params.id);

    if (!message){
        return res.status(404).send("Message not found");
    }
    res.render("messageDetails", { title: "Message Details", message: message });
}

module.exports = {
    blogDetailsControllerGet
}