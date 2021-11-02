const { getUsers } = require('../../../utils/handleDatadbase')
// md5 password hashing algorithm
const md5 = require('../../../utils/md5')

module.exports = async (req, res, next) => {
    try {
        // get data from db
        const data = await getUsers()

        // check if user object exists by email
        const userIsExist = data.find(item => item.email === req.body.email)
        if (!userIsExist) {
            return res.status(400).send({
                status: 404,
                error: "E-mail dosen't exist. please register before login."
            })
        }
        // check if password is correct
        const passwordIsCorrect = md5(req.body.password) === userIsExist.password
        if (!passwordIsCorrect) {
            return res.status(400).send({
                status: 404,
                error: "password is wrong."
            })
        }

        // respond to client
        delete userIsExist.password
        res.status(201).send({
            msg: 'login succeed',
            user: userIsExist,
        })
    } catch (error) {
        next(error)
    }
}