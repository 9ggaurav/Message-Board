const db = require("../db/queries");
const getFallbackImage = require("../utils/fallbackThumbnail")

const newBlogControllerGet = (req, res) => {
    res.render("form");
}

const newBlogControllerPost = async (req, res) => {
    let {author, blog_title, message, image_url} = req.body;
    image_url = image_url || await getFallbackImage.getFallbackImage();
    console.log(author, blog_title, message, image_url);
    await db.insertNewBlogandUser(author, blog_title, message, image_url);
    res.redirect("/");
}


module.exports = {
    newBlogControllerGet,
    newBlogControllerPost
}