const { getUsers } = require('../../../utils/handleDatadbase')
// md5 password hashing algorithm
const md5 = require('../../../utils/md5')
// JWT
const JWT = require('../../../utils/jwt')
const { JWTSecret } = require('../../../config/config.default')

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
        // create token
        const token = await JWT.jwtSign(
            { id: req.body.id },
            JWTSecret,
            { expiresIn: 60 * 60 * 24 * 7 } // token 7 天有效
        )
        // respond to client
        res.status(201).send({
            msg: 'login succeed',
            token: token,
        })
    } catch (error) {
        next(error)
    }
}