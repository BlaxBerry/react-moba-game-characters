const { getWordList } = require('../../../utils/handleDatadbase')

module.exports = async (req, res, next) => {
    try {
        const userEmail = req.currentUserInfo.email
        const lang = req.params.lang
        const wordID = req.params.id

        // get the list from db
        const data = await getWordList(userEmail, lang)
        // get word from list
        const word = data.find(item => item.id === wordID)

        // response
        res.status(200).send({
            word: word
        })
    } catch (error) {
        next(error)
    }
}