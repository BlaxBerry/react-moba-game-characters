const express = require('express')
const router = express.Router()
// Validator middleware
const loginValidator = require('../../../middleware/dataValidator/userRegister')
// JWT token Authorization
const tokenAuthorization = require('../../../middleware/tokenAuthorizate')

// user register   (/user/register)
router.post('/register', loginValidator, require('./user-Register'))

// user login   (/user/login)
router.post('/login', loginValidator, require('./user-Login'))

// current user info    (/user/)
router.get('/', tokenAuthorization, require('./user-GetCurrentUser'))

// update user   (/user/)
router.post('/', tokenAuthorization, require('./user-UpdateInfo'))



module.exports = router