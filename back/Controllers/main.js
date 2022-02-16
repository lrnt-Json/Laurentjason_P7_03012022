const db = require("../models");
const axios = require('axios').default;
const User = db.User;
const Comment = db.Comment;
const Post = db.Post;

exports.AddPost = async(req, res) => {
    const post = await Post.create({
        UserID: req.auth.UserID,
        Title: req.body.Title,
        Content: req.body.Content
    })
}

exports.AllPost = async(req, res) => {
    const post = await Post.findAll()
    res.status(201).json(post)
}

exports.OnePost = async(req, res) => {
    const post = await Post.findOne({ PostID: req.body.postID })
    res.status(201).json(post)
}

exports.Commentary = async(req, res) => {
    const Comment = await Comment.findAll({ PostID: req.body.postID })
    res.status(201).json(Comment)
}

exports.Profile = async(req, res) => {
    const userID = req.auth.userID
    const user = await User.findOne({ id: userID })
    res.status(201).json(user)
}

exports.DeleteProfile = async(req, res) => {

    const user = await User.drop({
        userID: req.auth.userID
    })

}