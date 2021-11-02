const express = require('express')
const router = express.Router()
// Validator middleware
const wordAddValidator = require('../../middleware/dataValidator/wordAdd')


// get words list ( /words/list/:lang )
router.get('/list/:lang', require('../../controllers/client/words/getWordsList'))

// add lang list  ( /words/list/add )
router.post('/list/add', require('../../controllers/client/words/addList'))

// get current word  ( /words/:id )
router.get('/:lang/:id', require('../../controllers/client/words/getCurrentWord'))

// add word  ( /words/add )
router.post('/add/', wordAddValidator, require('../../controllers/client/words/addWord'))

// edit word  ( /words/edit/:id )
router.post('/edit/:id', require('../../controllers/client/words/editWord'))

module.exports = router