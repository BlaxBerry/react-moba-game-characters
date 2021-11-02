// JWT token authorization
const JWT = require('../utils/jwt')
const { JWTSecret } = require('../config/config.default')
// db handler
const { getUsers } = require('../utils/handleDatadbase')

module.exports = async (req, res, next) => {
    try {
        // get token form request headers
        let token = req.headers.authorization
        token = token ? token.split('Bearer ')[1] : null

        // if token dosent exist
        if (!token) {
            return res.status(401).send({
                status: 401,
                msg: "authorization is required."
            })
        }
        // verify token
        const decodedToken = await JWT.jwtVerify(token, JWTSecret)

        // get user's id 
        const userID = decodedToken["id"]
        // seach user datd from db
        const data = await getUsers()
        const userInfo = data.find(item => item.id = userID)

        // 挂载 request object 
        req.currentUserInfo = userInfo

        next()
    } catch (error) {
        next(error)
    }
}
