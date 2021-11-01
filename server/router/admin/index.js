const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    let tooken = false
    if (!tooken) {
        return res.status(401).send({
            error: "无权访问"
        })
    }
    next()
})

// users
router.use('/users', require('../../controllers/admin/users/index.js'))


module.exports = router