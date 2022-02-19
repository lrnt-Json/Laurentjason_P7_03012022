const db = require("../models");
const User = db.User;
const Comment = db.Comment;
const Post = db.Post;

exports.AddPost = async(req, res) => {
    const user = await User.findOne({ where: { id: req.auth.userId } })
    const post = await Post.create({
        UserID: req.auth.userId,
        Username: user.username,
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
    const userID = req.auth.userId
    const user = await User.findOne({
        where: { id: userID }
    })
    console.log(user)
    res.status(201).json(user)
}

exports.DeleteProfile = async(req, res) => {

    const user = await User.destroy({
        id: req.auth.userID
    })

}

exports.DeletePost = async(req, res) => {
    const user = await Post.destroy({
        UserId: req.auth.userID
    })
}

exports.DeleteComment = async(req, res) => {
    const user = await Comment.destroy({
        UserId: req.auth.userID
    })
}