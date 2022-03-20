import express,{Request,Response} from 'express';

const router = express.Router();

router.post('/signUp',(req:Request, res:Response) =>{
    return res.send({text:"successful",status:200})
});


export {router as signUpRouter}