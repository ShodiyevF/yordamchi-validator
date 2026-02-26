import { ValidationInterface } from "./validation.interface";

export = validationMiddleware;
declare function validationMiddleware(dto: ValidationInterface.DTO, value: 'body' | 'params' | 'query'): (req: any, res: any, next: any) => any;
