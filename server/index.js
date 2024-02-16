
require('dotenv').config();
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

//Database Connection
import ConnectDB from './database/connection';

//API
import Auth from './API/Auth';

const Zomato = express();
Zomato.use(helmet());
Zomato.use(express.json());
Zomato.use(cors());

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
