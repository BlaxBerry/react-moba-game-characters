module.exports = (req, res, next) => {
    try {
        res.status(201).send({
            msg: 'updated info'
        })
    } catch (error) {
        next(error)
    }
}