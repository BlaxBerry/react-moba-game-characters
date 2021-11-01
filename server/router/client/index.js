const express = require('express')
const router = express.Router()

// user
router.use('/user', require('../../controllers/client/user/index.js'))


module.exports = router