const messages = require("../messagesDB");

const blogDetailsControllerGet = (req, res) => {
    const message = messages.find(m => m.id === req.params.id);
    console.log("Params id is ",req.params.id);
    if (!message){
        return res.status(404).send("Message not found");
    }
    res.render("messageDetails", { title: "Message Details", message: message });
}

module.exports = {
    blogDetailsControllerGet
}