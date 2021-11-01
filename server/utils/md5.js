const crypto = require('crypto')

module.exports = (password) => {
    password = password.toString()
    const first = crypto.createHash('md5')
        .update(password)
        .digest('hex')
    // double md5 password hashing algorithm
    const second = crypto
        .createHash('md5')
        .update(first)
        .digest('hex')
    return second
}