module.exports = (req, res, next) => {
    try {
        res.send({
            list: [1, 2, 3]
        })
    } catch (error) {
        next(error)
    }
}