const validator = require("./validator.js");

function validationMiddleware(dto, value) {
    return (req, res, next) => {
        try {
            if (!req[value]) {
                return res.status(403).json({
                    status: 403,
                    message: `${value}: is required`,
                    error: 'VALIDATION_ERROR'
                })
            }
            
            const validatorResponse = validator(dto, req[value]);
            if (validatorResponse.status !== 200) {
                return res.status(403).json({
                    status: 403,
                    message: validatorResponse.error,
                    error: 'VALIDATION_ERROR'
                })
            }

            return next();
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: `Validation middleware internal error`,
                error: 'INTERNAL_SERVER_ERROR'
            })
        }
    };
}

module.exports = validationMiddleware