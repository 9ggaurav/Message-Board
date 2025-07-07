const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
require('dotenv').config();
const newBlogRouter = require('./routes/newBlogRouter');
const indexRouter = require("./routes/indexRouter");
const blogDetailsRouter = require("./routes/blogDetailsRouter");


const server = express();
const PORT = process.env.PORT || 3000;

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
server.use(express.static(assetsPath));

server.use(favicon(path.join(__dirname, 'public', 'images', 'creeper_face_pfp.png')))

// to parse data into req.body while sending post request
server.use(express.urlencoded({ extended: true }));

// Routes
server.use("/", indexRouter);
server.use("/new", newBlogRouter);
server.use("/message", blogDetailsRouter);

// 404 Error Handler middleware
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
})

server.listen(PORT, ()=>{
    console.log(`server started at Port ${PORT}`);
})