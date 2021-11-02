const { getWordList, addToList } = require('../../../utils/handleDatadbase')
// uuid
const uudi = require('uuid')

module.exports = async (req, res, next) => {
    try {
        const userEmail = req.currentUserInfo.email
        const { lang, name, meaning, phrase } = req.body
        const word = {
            lang: lang,
            name: name,
            id: uudi.v1(),
            meaning: JSON.parse(meaning),
            phrase: JSON.parse(phrase)
        }

        // get the list from db
        const data = await getWordList(userEmail, lang)

        // check if word already exist in list
        const wordAlreadyExist = data.find(item => item.name === word.name)
        if (wordAlreadyExist) {
            return res.status(401).send({
                error: 'word already exist.'
            })
        }

        // add new word 
        data.push(word)

        // add new word to db
        await addToList(userEmail, lang, data)


        // response
        res.send({
            msg: `add new word succeed.`
        })
    } catch (error) {
        next(error)
    }
}