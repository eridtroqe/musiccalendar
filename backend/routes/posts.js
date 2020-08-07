
const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("", PostController.createPost);
router.get("", PostController.getPosts);

module.exports = router;
