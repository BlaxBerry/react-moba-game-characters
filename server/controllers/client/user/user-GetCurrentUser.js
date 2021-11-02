module.exports = (req, res, next) => {
    try {
        res.status(200).send({
            msg: "got current user's information",
            user: req.currentUserInfo  // middleware/tokenAuthorizate
        })
    } catch (error) {
        next(error)
    }
}