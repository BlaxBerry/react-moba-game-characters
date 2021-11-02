const { createLangList } = require('../../../utils/handleDatadbase')

module.exports = async (req, res, next) => {
    try {
        const userEmail = req.currentUserInfo.email
        const lang = req.body.lang

        // create new language list
        await createLangList(userEmail, lang)

        // response
        res.status(201).send({
            msg: `add new list succeed.`
        })
    } catch (error) {
        next(error)
    }
}