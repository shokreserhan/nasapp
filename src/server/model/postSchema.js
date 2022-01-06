const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    title: String,
    URL: String,
    media_type: String
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post