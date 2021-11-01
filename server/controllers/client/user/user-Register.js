const { getUsers, savToUsers } = require('../../../utils/handleDatadbase')
// md5 password hashing algorithm
const md5 = require('../../../utils/md5')


module.exports = async (req, res, next) => {
    try {
        // create new user
        const newUser = {
            id: "001",
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

        // respond to client
        delete newUser.password
        res.status(201).send({
            staus: 200,
            msg: "succeeded in creating a new user.",
            user: newUser,
        })
    } catch (error) {
        next(error)
    }
}