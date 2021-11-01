const express = require('express')
const router = express.Router()
// Validator middleware
const registerValidator= require('../../../middleware/dataValidator/userRegister')

// user login 
//   /user/register
router.post('/register', registerValidator, require('./user-Register'))

//   /user/login
router.post('/login', registerValidator, require('./user-Login'))

// current user info
//    /user/
router.get('/', require('./user-GetCurrentUser'))

// update user info
//   /user/
router.post('/', require('./user-UpdateInfo'))



module.exports = router