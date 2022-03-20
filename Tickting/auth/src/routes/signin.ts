import express,{Request,Response} from 'express';

const router = express.Router();

router.post('/signin',(req:Request, res:Response) =>{
    return res.send({text:"successful",status:200})
});


export {router as signInRouter}