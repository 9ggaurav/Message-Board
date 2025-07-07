const db = require("../db/queries");

const displayAllMessagesGet = async (req, res) => {

    const messages = await db.getAllForIndexPage()
    res.render("index", {
        title: "Stdout",
        messages: messages,
    })
}

module.exports = {
    displayAllMessagesGet
}