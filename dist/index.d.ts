import validatorMiddleware = require("./lib/validator.middleware.js");
import { ValidationInterface  } from "./lib/validation.interface.js";
import validatorLib = require("./lib/validator.js");
export { validatorLib as validator, validatorMiddleware, ValidationInterface };
