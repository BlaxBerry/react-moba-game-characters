const { getWordList, addToList } = require('../../../utils/handleDatadbase')

module.exports = async (req, res, next) => {
    try {
        const userEmail = req.currentUserInfo.email
        const wordID = req.params.id
        const lang = req.body.lang

        // get the list from db
        const data = await getWordList(userEmail, lang)
        // get the word from list
        const word = data.find(item => item.id === wordID)
        if (!word) {
            return res.status(404).send({
                error: "word dosen't exist."
            })
        }
        // get word's index
        const index = data.indexOf(word)

        // replace old word
        data.splice(index, 1, req.body)

        // save list to list in db
        await addToList(userEmail, lang, data)

        // response
        res.send({
            msg: `succeeded in editing word`,
        })
    } catch (error) {
        next(error)
    }
}