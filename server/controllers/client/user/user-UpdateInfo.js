module.exports = (req, res, next) => {
    try {
        console.log(req.currentUserInfo); // middleware/tokenAuthorizate


        res.status(201).send({
            msg: 'updated info'
        })
    } catch (error) {
        next(error)
    }
}