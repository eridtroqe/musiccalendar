const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    artist: [{ type: String }],
    title: { type: String },
    album: { type: String },
    release_date: { type: Date },
    order: { type: Number, default: 1 }
});

module.exports = mongoose.model("Post", postSchema);
