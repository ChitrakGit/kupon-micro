import express,{Request,Response,NextFunction } from 'express';
import { json } from 'body-parser';

import {currentUserRouter} from './routes/current-user';
import {signUpRouter} from './routes/signup';
import {signInRouter} from './routes/signin';
import {signOutRouter} from './routes/signout';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",currentUserRouter)
app.use("/api/users",signUpRouter)
app.use("/api/users",signInRouter)
app.use("/api/users",signOutRouter)





app.get('/info', (req:Request, res:Response) => {
  return res.send('Hi there!... we are from auth');
});
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})