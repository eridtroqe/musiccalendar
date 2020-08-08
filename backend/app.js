const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/posts");


const app = express();


mongoose
  .connect(
    "mongodb+srv://erid:erid12345@cluster0-ambpl.mongodb.net/music?retryWrites=true&w=majority",
    { useNewUrlParser: true, 
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Conection to database failed!");
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/", express.static(path.join(__dirname,"music")));
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname,"music", "index.html"));
  });
  app.use("/api/user", userRoutes);
  app.use("/api/posts", postRoutes);

  


  module.exports = app;