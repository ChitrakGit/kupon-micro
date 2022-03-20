import express,{Request,Response} from 'express';
import {body, validationResult} from 'express-validator';

const router = express.Router();



const validation = [
    body('email')
        .isEmail()
        .withMessage("email must be valid"),
    body('password')
        .trim()
        .isLength({min:4, max:20})
        .withMessage("password should be length of 4 to 20")
];

router.post('/signUp',validation,(req:Request, res:Response) =>{
    const errors = validationResult(req);
    // if(!errors.isEmpty()) return res.send({text:"unsuccessful",status:400,result:errors.array() });
    if(!errors.isEmpty()) {
        const error:Error = new Error('Invalid email or password') ;
        // error.reasons = errors.array();
        throw error
    }
    const { email, password } = req.body;
    // if(!email || typeo1f email !== 'string') return res.send({text:"unsuccessful",status:400,result:"wrong email"});

    return res.send({text:"successful",status:200})
});


export {router as signUpRouter}