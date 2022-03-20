import express,{Request,Response} from 'express';

const router = express.Router();

router.get('/currentUser',(req:Request, res:Response) =>{
    return res.send({text:"current user found",status:200})
});


export {router as currentUserRouter}