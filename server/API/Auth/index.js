//Package
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user";

//Router
const Router = express.Router();

/*
* Route           /signup
* Description     Signup with email and password
* Params          none
* Access          Public
* Method          POST
*/

Router.post("/signup",async (req ,res) => {
    try{
        const {email,password,fullName,phoneNumber} = req.body.credentials
        const checkByEmail = await UserModel.findOne({ email });
        const checkByPhone = await UserModel.findOne({ phoneNumber });

       if (checkByEmail || checkByPhone){
           return res.json({user:"User is Already Exist"})
       }

       //hashing Password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password,bcryptSalt)

        //save to the database
        await UserModel.create({
            ...req.body.credentials,
            password:hashedPassword
        })
        //JWT Auth Token
        const token = jwt.sign({user:{fullName,email}}, "ZomatoAPP");
        return res.status(200).json({token,status: "Success" })
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

export default Router;