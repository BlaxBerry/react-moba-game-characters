const express = require('express')
const router = express.Router()
// JWT token Authorization
const tokenAuthorization = require('../../middleware/tokenAuthorizate')

// user
router.use('/user', require('./user'))

// list
router.use('/words', tokenAuthorization, require('./words'))

module.exports = router