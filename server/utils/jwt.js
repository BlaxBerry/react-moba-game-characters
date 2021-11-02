const jwt = require('jsonwebtoken')
const { promisify } = require('util')

// create token
exports.jwtSign = promisify(jwt.sign)
// validate token 
exports.jwtVerify = promisify(jwt.verify)