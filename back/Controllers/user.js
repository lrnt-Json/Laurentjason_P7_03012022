const db = require("../models");
const User = db.User;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(async hash => {
            const user = await User.create({
                mail: req.body.Mail,
                username: req.body.Username,
                password: hash

            })

        })
}

exports.logUser = async(req, res) => {
    const username = req.body.Username
    const password = req.body.password
    const user = await User.findOne({
        where: { username: username }
    })
    bcrypt.compare(password, user.password)
        .then(valid => {

            if (!valid) {
                return res.status(401).send({ error: 'invalid password' }) //api error 401 : Unauthorized
            } else {
                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign({ userId: user.id },
                        'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
                })
            }
        })

    .catch(error => res.status(500).json({ error }))

}