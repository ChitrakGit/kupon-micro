import { Request,Response, NextFunction } from "express";

export const errorHandler = (error:Error, req:Request, res:Response,next:NextFunction)=>{
    return res.send({text:"unsuccessful",status:400,error: error.message } ); 
}