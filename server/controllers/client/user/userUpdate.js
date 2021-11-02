const { getUsers, savToUsers } = require('../../../utils/handleDatadbase')

module.exports = async (req, res, next) => {
    try {
        console.log(req.currentUserInfo); // middleware/tokenAuthorizate

        // get users list from db
        const data = await getUsers()

        // get index of user
        const index = data.indexOf(req.currentUserInfo)

        //replace
        data.splice(index, 1, req.body)

        /// save data to db
        await savToUsers(data)

        // response
        res.status(201).send({
            msg: 'updated info',
            user: req.body
        })
    } catch (error) {
        next(error)
    }
}