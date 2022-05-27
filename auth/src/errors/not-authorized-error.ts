import { CustomError } from "./custom-error";

export class NotAuthaurizedError extends CustomError {
  constructor(){
    super('Not authorized');
    Object.setPrototypeOf(this,NotAuthaurizedError.prototype)
  }
  statusCode = 401;
  serializeErrors(){
    return [{message: 'Not authorized'}]
  }

}