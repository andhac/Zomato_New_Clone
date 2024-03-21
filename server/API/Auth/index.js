//Package
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import { UserModel } from "../../database/user";
import {router} from "express/lib/application";

//validation
import{validateSignin,ValidateSignup} from "../../validation/auth";

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
        await ValidateSignup(req.body.credentials)
        const {email,password,fullName,phoneNumber} = req.body.credentials
        const checkByEmail = await UserModel.findOne({ email });
        // const checkByPhone = await UserModel.findOne({ phoneNumber });

        if (checkByEmail){
            throw new Error("User is Already Exist")
        }

        //hashing Password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password,bcryptSalt)

        //save to the database
        const newUser= await UserModel.create({
            ...req.body.credentials,
            password:hashedPassword
        })
        //JWT Auth Token
        // const token = jwt.sign({user:{fullName,email}}, "ZomatoAPP");
        const token = newUser.generateJwtToken();
        return res.status(200).json({token,status: "Success" })
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /signin
* Description     Signin with email and password
* Params          none
* Access          Public
* Method          POST
*/

Router.post("/signin", async (req ,res)=> {
    try{
        await validateSignin(req.body.credentials)
        const{email,password} = req.body.credentials;
        const checkUser = await UserModel.findOne({email})
        if(!checkUser) throw new Error("User Does not exist!!!")

        //Password Match
        const doesPasswordMatch = await bcrypt.compare(password,checkUser.password)
        if (!doesPasswordMatch) throw new Error("Invalid Password!!!")

        const token = jwt.sign({user:{_id: checkUser._id.toString()}}, "ZomatoAPP");
        // const token = checkUser.generateJwtToken();
        return res.status(200).json({token,status: "Success" })


    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /google
* Description     Googel Signin
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}))

/*
* Route           /google/callback
* Description     Googel Signin callback
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"})
,(req,res)=>{
    return res.status(200).json({token:req.session.passport.user.token , status:"Success"})
    }
)

export default Router;