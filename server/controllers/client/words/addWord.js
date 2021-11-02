const { getWordList, addToList } = require('../../../utils/handleDatadbase')
// uuid
const uudi = require('uuid')

module.exports = async (req, res, next) => {
    try {
        const userEmail = req.currentUserInfo.email
        const lang = req.body.lang


        // get the list from db
        const data = await getWordList(userEmail, lang)

        // add new word 
        data.push({
            lang: lang,
            name: "Hello",
            id: uudi.v1(),
            meaning: ["你好", "嗨", "喂"],
            phrase: [
                {
                    sentence: "Hello,deer~",
                    meaning: "你好亲爱的～"
                }
            ]
        })

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