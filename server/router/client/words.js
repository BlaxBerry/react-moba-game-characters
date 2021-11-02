const express = require('express')
const router = express.Router()


// get words list ( /words/list/:lang )
router.get('/list/:lang', require('../../controllers/client/words/getWordsList'))

// add lang list  ( /words/list/add )
router.post('/list/add/', require('../../controllers/client/words/addList'))

// add word  ( /words/add )
router.post('/add/', require('../../controllers/client/words/addWord'))

// edit word  ( /words/edit/:id )
router.post('/edit/:id', require('../../controllers/client/words/editWord'))

module.exports = router