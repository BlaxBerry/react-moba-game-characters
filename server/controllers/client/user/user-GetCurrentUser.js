module.exports = (req, res, next) => {
    try {
        res.status(200).send({
            msg: 'current user info'
        })
    } catch (error) {
        next(error)
    }
}