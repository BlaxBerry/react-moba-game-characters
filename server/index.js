const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const app = express()

// log
app.use(morgan('dev'))

// request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use(cors())

// router
// client side
app.use(require('./router/client/index.js'))
// admin management side
app.use('/api', require('./router/admin/index.js'))


// route 404
app.use((req, res, next) => {
    res.status(404).send({
        error: '404, Not Found'
    })
})

// error handler middleware
app.use(errorHandler())

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})