require("dotenv").config();

UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

async function getFallbackImage() {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/random?query=minecraft_art&client_id=${UNSPLASH_ACCESS_KEY}`);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        console.log(data.urls.small); 
        return data.urls.small;
    } catch (err) {
        console.error("Error fetching image:", err);
        return null;
    }
}

module.exports = {
    getFallbackImage
}