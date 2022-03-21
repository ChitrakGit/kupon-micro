import { Request,Response, NextFunction } from "express";
import { CustomErrors } from "../errors/custom-errors";

// import {RequiredValidatorError} from '../errors/request-validation-errors';
// import {DatabaseConnectionError} from '../errors/database-connection-errors';

export const errorHandler = async(error:Error, req:Request, res:Response,next:NextFunction)=>{
    // if(error instanceof RequiredValidatorError){
    //     // const formattedErrors = error.errors.map(error =>{
    //     //     return {massage:error.msg, field:error.param}
    //     // })
    //     return res.send({text:"unsuccessful",status:error.statusCode,error: error.serializeErrors() } );
    // }
    // if(error instanceof DatabaseConnectionError){
    //     return res.send({text:"unsuccessful",status:error.statusCode,error: error.serializeErrors() } );
    // }

    if(error instanceof CustomErrors){
        return res.send({text:"unsuccessful",status:error.statusCode,error: error.serializeErrors() } ); 
    }
    return res.send({text:"unsuccessful",status:400,error: "something Went wrong"} ); 
}