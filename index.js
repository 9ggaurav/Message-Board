const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter')
const messages = require("./messagesDB.js")

const server = express();
const PORT = 4000;

console.log(messages);


server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "./public");
server.use(express.static(assetsPath));

// to parse data into req.body while sending post request
server.use(express.urlencoded({ extended: true }));




server.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
})


server.use("/new", indexRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
})

server.listen(PORT, ()=>{
    console.log(`server started at Port ${PORT}`);
})