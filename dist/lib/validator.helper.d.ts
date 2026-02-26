export = validatorHelper;
declare function validatorHelper(): {
    isString(value: any): value is string | String;
    isNumber(value: any): boolean;
    isBoolean(value: any): boolean;
    isObject(value: any): boolean;
    isArray(value: any): value is any[];
    getObjectOriginalType(value: any): any;
};
