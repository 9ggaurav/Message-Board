const messages = require("../messagesDB")

const displayAllMessagesGet = (req, res) => {
    res.render("index", {
        title: "MessageBoard",
        messages: messages
    })
}

module.exports = {
    displayAllMessagesGet
}