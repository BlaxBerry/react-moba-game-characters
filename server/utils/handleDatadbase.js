const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)

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


// create user's words directory 
exports.createUserWordsDir = async (email) => {
    await mkdir(path.join(__dirname, `../database/words/${email}`))
}



// get word list
exports.getWordList = async (email, lang) => {
    const path_List_File = path.join(__dirname, `../database/words/${email}/${lang}.json`)
    const data = await readFile(path_List_File, 'utf-8')
    return data ? JSON.parse(data) : []
}


// create lang list
exports.createLangList = async (email, lang) => {
    const data = JSON.stringify([])
    await writeFile(path.join(__dirname, `../database/words/${email}/${lang}.json`), data)
}


// add word to list
exports.addToList = async (email, lang, data) => {
    const path_List_File = path.join(__dirname, `../database/words/${email}/${lang}.json`)
    const newData = JSON.stringify(data)
    await writeFile(path_List_File, newData)
}