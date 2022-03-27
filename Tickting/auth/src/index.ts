import express,{Request,Response,NextFunction } from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import mongoose from 'mongoose';

import {currentUserRouter} from './routes/current-user';
import {signUpRouter} from './routes/signup';
import {signInRouter} from './routes/signin';
import {signOutRouter} from './routes/signout';

import {errorHandler} from './middlewares/error-handlers';
import {NotFoundError} from './errors/not-found-error';



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

app.all('*',async (req,res,next)=>{
  // next( new NotFoundError() ) ; // if 'express-async-errors' not installed

  throw new NotFoundError();
})

app.use(errorHandler) ;

const start  = async ()=>{
  try {
    let mongoUrl = "mongodb://localhost:27017/auth";
    // let mongoUrl = "mongodb://auth-mongo-srv:27017/auth" ;
      await mongoose.connect(mongoUrl,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify: false
    });
    console.log("connected to mongodv k8")
    app.listen(3000,()=>{
      console.log("Listening to port 3000")
    })
  } catch (error) {
    console.log(error)
  }
}

start();

