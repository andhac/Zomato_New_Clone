
require('dotenv').config();
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import passport from 'passport'
import session from 'express-session';

//Database Connection
import ConnectDB from './database/connection';

//Google Auth config
import googleConfig from "./config/google.config";

//API
import Auth from './API/Auth';

//Passport Config
googleConfig(passport);

const Zomato = express();
Zomato.use(helmet());
Zomato.use(express.json());
Zomato.use(cors());
Zomato.use(passport.initialize());
// Zomato.use(passport.session)
Zomato.use(session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


//Application Route
Zomato.use("/auth",Auth);

Zomato.listen(4000, async()=>{
    ConnectDB()
        .then(()=>{
        console.log("Server is up and running 🚀");
    }).catch((err)=>{
        console.log("Server is running, but database connection failed"+err);
    })
})
