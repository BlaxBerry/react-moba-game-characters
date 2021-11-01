module.exports = (req, res, next) => {
    try {
        res.status(201).send({
            msg: 'welcome to login, id is 679807890789'
        })
    } catch (error) {
        next(error)
    }
}