const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        //console.log(req.headers.authorization.split('token=')[1])
        const token = req.headers.authorization.split('token=')[1]
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        const userId = decodedToken.userId
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID'
        } else {
            next()
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};