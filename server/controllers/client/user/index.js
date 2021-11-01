const express = require('express')
const router = express.Router()

// user login 
//   /user/login
router.post('/login', require('./user-Login'))

// current user info
//    /user/
router.get('/', require('./user-GetCurrentUser'))

// update user info
//   /user/
router.post('/', require('./user-UpdateInfo'))



module.exports = router