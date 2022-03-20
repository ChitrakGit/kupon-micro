import express,{Request,Response} from 'express';

const router = express.Router();

router.post('/signout',(req:Request, res:Response) =>{
    return res.send({text:"successful",status:200})
});


export {router as signOutRouter}