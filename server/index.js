
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
import privateRouteConfig from "./config/route.config"

//API
import Auth from './API/Auth';
import Restaurant from './API/Restaurant';
import Food from './API/Food';
import Menu from './API/Menu';
import Image from './API/Image';
import Order from './API/Orders';
import Reviews from './API/Reviews';
import User from './API/User';


//Passport Config
googleConfig(passport);
privateRouteConfig(passport)

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
Zomato.use("/restaurant",Restaurant);
Zomato.use("/food",Food);
Zomato.use("/menu",Menu);
Zomato.use("/image",Image);
Zomato.use("/order",Order);
Zomato.use("/reviews",Reviews);
Zomato.use("/user",User);


Zomato.listen(4000, async()=>{
    ConnectDB()
        .then(()=>{
        console.log("Server is up and running 🚀");
    }).catch((err)=>{
        console.log("Server is running, but database connection failed"+err);
    })
})