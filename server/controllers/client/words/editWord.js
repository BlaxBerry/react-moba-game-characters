module.exports = (req, res, next) => {
    try {
        const wordID = req.params.id


        if (!wordID) {
            return res.status(400).send({
                msg: 'word id is necessary.'
            })
        }

        res.send({
            msg: `succeeded in editing word`
        })
    } catch (error) {
        next(error)
    }
}