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

exports.AddComment = async(req, res) => {
    const user = await User.findOne({ where: { id: req.auth.userId } })
    const post = await Comment.create({
        UserID: req.auth.userId,
        PostID: req.body.PostID,
        Username: user.username,
        Content: req.body.Content
    })
}

exports.AllPost = async(req, res) => {
    const post = await Post.findAll()
    res.status(201).json(post)
}

exports.OnePost = async(req, res) => {
    const post = await Post.findOne({ where: { id: req.body.PostID } })
    res.status(201).json(post)
}

exports.AllComment = async(req, res) => {
    const comment = await Comment.findAll({
        where: { PostID: req.body.PostID },
        limit: 10
    })
    console.log(comment)
    res.status(201).json(comment)
}

exports.Profil = async(req, res) => {
    const userID = req.auth.userId
    const user = await User.findOne({
        where: { id: userID }
    })
    res.status(201).json(user)
}

exports.DeleteProfil = async(req, res) => {

    const delcomment = Comment.destroy({
        where: { UserID: req.auth.userId }
    })
    const findpost = await Post.findAll({
        where: { UserID: req.auth.userId }
    })
    for (let i = 0; i < findpost.length; i++) {
        const delpostcomment = Comment.destroy({
            where: { PostID: findpost[i].id }
        })
        const delpost = Post.destroy({
            where: { id: findpost[i].id }
        })
    }

    const user = await User.destroy({
        where: { id: req.auth.userId },
        limit: 1
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