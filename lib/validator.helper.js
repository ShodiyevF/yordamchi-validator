function validatorHelper() {
    const self = {}
    
    self.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    }
    
    self.isNumber = function (value) {
        if (typeof value === 'number' && !isNaN(value)) return true;
        if (typeof value === 'string' && value.trim() !== '' && !isNaN(Number(value))) return true;
        return false;
    }
    
    self.isBoolean = function (value) {
        if (typeof value === 'boolean') {
            return true
        }
        if (value === 'true' || value === 'false') {
            return true
        }
        
        return false;
    }
    
    self.isObject = function (value) {
        return (
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value)
        )
    }
    
    self.isArray = function (value) {
        return Array.isArray(value);
    }
    
    
    self.getObjectOriginalType = function (value) {
        return Object.prototype.toString.call(value).slice(8, -1);
    }

    return self
}

module.exports = validatorHelper