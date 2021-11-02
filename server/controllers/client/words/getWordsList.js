module.exports = (req, res, next) => {
    try {
        const lang = req.params.lang



        res.send({
            msg: `got words list of ${lang}`
        })
    } catch (error) {
        next(error)
    }
}