require("dotenv").config();

const express = require("express");
const controller = require("./controller");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/comments", async(_req, res) => {
    try {
        const response = await controller.fetchComments();
        return res.status(200).json({
            response,
            success: true,
        });
    } catch (error) {
        console.log("error: ", error.response.body);
        return res.status(400).json({
            message: error.response.body,
            success: true,
        });
    }
});

app.get("/posts", async(_req, res) => {
    try {
        const response = await controller.fetchPosts();
        return res.status(200).json({
            response,
            success: true,
        });
    } catch (error) {
        console.log("error: ", error.response.body);
        return res.status(400).json({
            message: error.response.body,
            success: true,
        });
    }
});

app.get("/photos", async(_req, res) => {
    try {
        const response = await controller.fetchPhotos();
        return res.status(200).json({
            response,
            success: true,
        });
    } catch (error) {
        console.log("error: ", error.response.body);
        return res.status(400).json({
            message: error.response.body,
            success: true,
        });
    }
});

app.get("/comments-buffer", async(_req, res) => {
    try {
        const response = await controller.fetchCommentsBuffer();
        return res.status(200).json({
            response,
            success: true,
        });
    } catch (error) {
        console.log("error: ", error.response.body);
        return res.status(400).json({
            message: error.response.body,
            success: true,
        });
    }
});

app.get("/posts-buffer", async(_req, res) => {
    try {
        const response = await controller.fetchPostsBuffer();
        return res.status(200).json({
            response,
            success: true,
        });
    } catch (error) {
        console.log("error: ", error.response.body);
        return res.status(400).json({
            message: error.response.body,
            success: true,
        });
    }
});

app.get("/photos-buffer", async(_req, res) => {
    try {
        const response = await controller.fetchPhotosBuffer();
        return res.status(200).json({
            response,
            success: true,
        });
    } catch (error) {
        console.log("error: ", error.response.body);
        return res.status(400).json({
            message: error.response.body,
            success: true,
        });
    }
});

app.listen(process.env.NODE_PORT || 3000, () => {
    console.log("Server running on port 3000");
});