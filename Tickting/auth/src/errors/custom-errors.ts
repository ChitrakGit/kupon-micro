export abstract class CustomErrors extends Error {

    abstract statusCode:Number;
    constructor(massage:string) {
        super(massage);
        Object.setPrototypeOf(this, CustomErrors.prototype);
    }

    abstract serializeErrors():{massage:String; field?:String }[] ;
  }