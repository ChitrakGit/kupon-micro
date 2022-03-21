import { ValidationError } from "express-validator";
import { CustomErrors } from "./custom-errors";


// interface CustomErrors{
//     statusCode:Number;
//     serializeErrors():{
//         massage:String;
//         field?:String ;
//     }[]
// }



export class RequiredValidatorError extends CustomErrors {
    statusCode = 400;
    constructor(public errors: ValidationError[] ){
        super('Error in fields/parameters');

        // we are executing building class
        Object.setPrototypeOf(this, RequiredValidatorError.prototype)
    }

    serializeErrors(){
        return this.errors.map(error =>{
            return {massage:error.msg, field:error.param}
        })
    }
  }