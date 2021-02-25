const fetch = require("node-fetch");
const baseUrl = "https://jsonplaceholder.typicode.com";

exports.fetchComments = async() => {
    // https://jsonplaceholder.typicode.com/comments
    const response = await fetch(`${baseUrl}/comments`);
    const json = await response.json();
    return json;
};

exports.fetchPosts = async() => {
    // https://jsonplaceholder.typicode.com/posts
    try {
        const response = await fetch(`${baseUrl}/posts`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error.response.body);
    }
};

exports.fetchPhotos = async() => {
    // https://jsonplaceholder.typicode.com/photos
    try {
        const response = await fetch(`${baseUrl}/photos`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error.response.body);
    }
};