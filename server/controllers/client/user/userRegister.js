const { getUsers, savToUsers, createUserWordsDir } = require('../../../utils/handleDatadbase')
// md5 password hashing algorithm
const md5 = require('../../../utils/md5')
// uuid
const uudi = require('uuid')

module.exports = async (req, res, next) => {
    try {
        // create new user
        const newUser = {
            id: uudi.v1(),
            email: req.body.email,
            username: req.body.username,
            password: md5(req.body.password),
            avatar: "",
            motto: ""
        }
        // get data from db
        const data = await getUsers()

        // check if user object already exists
        const userAlreadyExist = data.find(item => item.email === req.body.email)
        if (userAlreadyExist) {
            return res.status(400).send({
                status: 400,
                error: "E-mail already in use. user already exists."
            })
        }
        // add to data
        data.push(newUser)
        // save data to db
        await savToUsers(data)


        // create user's words directory in db
        await createUserWordsDir(newUser.email)


        // respond to client
        res.status(201).send({
            msg: "succeeded in creating a new user."
        })
    } catch (error) {
        next(error)
    }
}