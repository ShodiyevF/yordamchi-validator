const validatorMiddleware = require('./lib/validator.middleware.js')
const validatorLib = require('./lib/validator.js')

const validator = {
    validator: validatorLib,
    validatorMiddleware: validatorMiddleware
}

module.exports = validator