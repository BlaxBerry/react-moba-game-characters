const { body, check, validationResult } = require('express-validator');

const registerValidator = () => {
    return [
        // data validation
        body('lang')
            .notEmpty()
            .withMessage('lang cannot be empty')
        ,
        body('name')
            .trim()
            .notEmpty()
            .withMessage('name cannot be empty')
        ,
        body('meaning')
            .notEmpty()
            .withMessage('meaning cannot be empty')
        ,
        body("phrase")
            .notEmpty()
            .withMessage('phrase cannot be empty')
        ,

        // validation result
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next()
        }
    ]
}
module.exports = registerValidator()
