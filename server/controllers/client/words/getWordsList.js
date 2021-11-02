const { getWordList } = require('../../../utils/handleDatadbase')

module.exports = async (req, res, next) => {
    try {
        const userEmail = req.currentUserInfo.email
        const lang = req.params.lang

        // get the list from db
        const data = await getWordList(userEmail, lang)

        const list = data.map(item => ({
            id: item.id,
            name: item.name,
            meaning: item.meaning
        }))

        // response
        res.send({
            msg: `got words list of ${lang}`,
            list: list,
        })
    } catch (error) {
        next(error)
    }
}