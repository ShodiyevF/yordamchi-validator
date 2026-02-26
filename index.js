const validatorMiddleware = require('./lib/validator.middleware.js')
const validatorLib = require('./lib/validator.js')

const yordamchiValidator = {
    validator: validatorLib,
    validatorMiddleware: validatorMiddleware
}

module.exports = yordamchiValidator