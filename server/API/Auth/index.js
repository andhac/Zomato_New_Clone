// //Package
// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
//
// //Models
// import { UserModel } from "../../database/user";
//
// //Router
// const Router = express.Router();
//
// /*
// * Route           /signup
// * Description     Signup with email and password
// * Params          none
// * Access          Public
// * Method          POST
// */
//
// Router.post("/signup",async (req ,res) => {
//     try{
//         await  UserModel.findByEmailAndPhone(req.body.credentials)
//         const newUser = await UserModel.create(req.body.credentials);
//         const token = newUser.genrateJwtToken();
//         return res.status(200).json({token,status: "Success" })
//     }catch (err){
//         return res.status(500).json({error:err.message})
//     }
// })
//
// Router.post("/signin",async (req,res)=>{
//     try {
//         const user = UserModel.findByEmailAndPassword(req.body.credentials)
//         const token = user.genrateJwtToken();
//         return res.status(200).json({token,status:"Signed in"})
//     }catch (err){
//         return res.status(500).json({error:err.message})
//     }
// })
//
// export default Router;
//



//Dummy Code
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
            throw new Error("User is Already Exist")
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

Router.post("/signin", async (req ,res)=> {
    try{
        const{email,password} = req.body.credentials;
        const checkUser = await UserModel.findOne({email})
        if(!checkUser) throw new Error("User Does not exist!!!")

        //Password Match
        const doesPasswordMatch = await bcrypt.compare(password,checkUser.password)
        if (!doesPasswordMatch) throw new Error("Invalid Password!!!")

        const token = jwt.sign({user:{fullName: checkUser.fullName,}}, "ZomatoAPP");
        return res.status(200).json({token,status: "Success" })


    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

export default Router;