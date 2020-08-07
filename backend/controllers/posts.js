const Post = require("../models/post");
const fs = require('fs');
const path = require('path');

exports.createPost = (req, res, next) => {

  const post = new Post({
    artist: req.body.artist,
    title: req.body.title,
    album: req.body.album,
    release_date: req.body.release_date
  });

  post.save().then(createdPost => {
    console.log('createdPOst ', createdPost);
    
    res.status(201).json({
      message: "Post added succesfully!",
      post: {
        ...createdPost,
        id: createdPost._id
      }
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "Creation post failed!"
      });
    });
};

exports.getPosts = (req, res, next) => {

  const postQuery = Post.find();
  let fetchedPosts;
  postQuery.then(documents => {
    fetchedPosts = documents;
    return Post.countDocuments();
  })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched succesfully",
        posts: fetchedPosts,
        maxPosts: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
}

exports.deletePost = (req, res, next) => {

  Post.findOne({ _id: req.params.id }).then(
    post => {
      return Post.deleteOne({
        _id: req.params.id,
      }).then((result) => {
        if (result.n > 0) {
          res.status(200).json({ message: "Deleted successful!" });
        } else {
          res.status(401).json({ message: "Not authorized!" });
        }
      })
        .catch(error => {
          res.status(500).json({
            message: "Deleting  failed!"
          });
        });
    }
  ).catch(error => console.log('Error finding post'));
}