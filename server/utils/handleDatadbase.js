const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

// db path
const path_Users = path.join(__dirname, '../database/user/users.json')

// get users list
exports.getUsers = async () => {
    const data = await readFile(path_Users, 'utf-8')
    return data ? JSON.parse(data) : []
}

// save to users list
exports.savToUsers = async (data) => {
    const newData = JSON.stringify(data)
    await writeFile(path_Users, newData)
}