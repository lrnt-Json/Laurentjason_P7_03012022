const db = require("../models");
const User = db.User;
const Feedback = db.Feedback;
const Post = db.Post;


exports.IsAdmin = async(req, res) => {
    const userID = req.auth.userId
    const user = await User.findOne({
        where: { id: userID }
    }).then(function(response) {
        res.status(201).json(response.isAdmin)
    })
}

exports.AddPost = async(req, res) => {
    console.log('start')
    const user = await User.findOne({ where: { id: req.auth.userId } });
    const file = req.file;
    const content = req.body.content;
    console.log(file);
    const post = await Post.create({
        UserID: req.auth.userId,
        Username: user.username,
        Content: content,
        imgUrl: `${req.protocol}://${req.get('host')}/images/${file.filename}`
    }).then(function(response) {
        res.status(200).send({ msg: "post send" })
    }).catch(function(error) {
        res.status(401).send({ error: "post not send" })
    })
}

exports.AddFeedback = async(req, res) => {
    const user = await User.findOne({ where: { id: req.auth.userId } })
    const post = await Feedback.create({
        UserID: req.auth.userId,
        PostID: req.body.PostID,
        Username: user.username,
        Content: req.body.Content
    }).then(function(response) {
        res.status(200).send({ msg: "feedback send" })
    }).catch(function(error) {
        res.status(401).send({ error: "feedback not send" })
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

exports.AllFeedback = async(req, res) => {
    const feedback = await Feedback.findAll({
        where: { PostID: req.body.PostID },
        limit: 10
    })
    res.status(201).json(feedback)
}

exports.Profil = async(req, res) => {
    const userID = req.auth.userId
    const user = await User.findOne({
        where: { id: userID }
    })
    res.status(201).json(user)
}

exports.DeleteProfil = async(req, res) => {

    const delfeedback = Feedback.destroy({
        where: { UserID: req.auth.userId }
    })
    const findpost = await Post.findAll({
        where: { UserID: req.auth.userId }
    })
    for (let i = 0; i < findpost.length; i++) {
        const delpostfeedback = Feedback.destroy({
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
    const delpostfeedback = Feedback.destroy({
        where: { PostId: req.body.id }
    })
    const delpost = Post.destroy({
        where: { id: req.body.id }
    })
}

exports.DeleteFeedback = async(req, res) => {
    const user = await Feedback.destroy({
            where: { id: req.body.id }
        })
        .then(function(response) {
            res.status(200).send({ msg: "Feedback deleted" })
        })
        .catch(function(error) {
            res.status(401).send({ error: "Feedback not deleted" })
        })
}