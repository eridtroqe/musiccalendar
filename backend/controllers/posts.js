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

exports.updatePosts = (req, res, next) => {
  let posts = req.body.posts;
  let postsIds = [];
  posts.forEach( post => postsIds.push(post._id));
  console.log('post ids ', postsIds);
  Post.deleteMany({_id: { $in: postsIds }}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });

  posts.forEach(post => 
  {
    let newPost = new Post({
      _id: post.id,
      artist: post.artist,
      title: post.title,
      album: post.album,
      release_date: post.release_date,
      order: post.order
    });

    newPost.save().then(res => res.status(200)).catch(err => res.status(500));
  }
  );
};