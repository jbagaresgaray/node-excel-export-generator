const services = require("./services");
const utils = require("./utils");

exports.fetchComments = async() => {
    const users = await services.fetchComments();
    const status = await utils.generateExcel(users);
    return status;
};

exports.fetchPosts = async() => {
    const posts = await services.fetchPosts();
    const status = await utils.generateExcel(posts);
    console.log("status: ", status);
    return status;
};

exports.fetchPhotos = async() => {
    const photos = await services.fetchPhotos();
    const status = await utils.generateExcel(photos);
    return status;
};

exports.fetchCommentsBuffer = async() => {
    const users = await services.fetchComments();
    const status = await utils.generateExcelBuffer(users);
    return status;
};

exports.fetchPostsBuffer = async() => {
    const posts = await services.fetchPosts();
    const status = await utils.generateExcelBuffer(posts);
    console.log("status: ", status);
    return status;
};

exports.fetchPhotosBuffer = async() => {
    const photos = await services.fetchPhotos();
    const status = await utils.generateExcelBuffer(photos);
    return status;
};