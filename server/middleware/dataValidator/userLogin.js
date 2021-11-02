const { body, check, validationResult } = require('express-validator');

const registerValidator = () => {
    return [
        // data validation
        body('email')
            .trim()
            .notEmpty()
            .withMessage('E-mail cannot be empty')
        ,
        body('password')
            .trim()
            .notEmpty()
            .withMessage('password cannot be empty')
        ,
        check('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('E-mail address is invalid')
        ,
        check('password')
            .isLength({ min: 6 })
            .withMessage('password must be at least 5 chars long')
            .matches(/\d/)
            .withMessage('password must contain a number')
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
