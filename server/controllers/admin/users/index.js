const express = require('express')
const router = express.Router()

// users list
//  /api/users/list
router.get('/list', require('./users-List'))


module.exports = router