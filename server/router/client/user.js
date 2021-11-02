const express = require('express')
const router = express.Router()
// Validator middleware
const registerValidator = require('../../middleware/dataValidator/userRegister')
const loginValidator = require('../../middleware/dataValidator/userLogin')
// JWT token Authorization
const tokenAuthorization = require('../../middleware/tokenAuthorizate')

// user register   (/user/register)
router.post('/register', registerValidator, require('../../controllers/client/user/userRegister'))

// user login   (/user/login)
router.post('/login', loginValidator, require('../../controllers/client/user/userLogin'))

// current user info    (/user/)
router.get('/', tokenAuthorization, require('../../controllers/client/user/getCurrentUser'))

// update user   (/user/)
router.post('/', tokenAuthorization, require('../../controllers/client/user/userUpdate'))



module.exports = router