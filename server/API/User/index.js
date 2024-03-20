import express from "express";

//models
import{UserModel} from "../../database/allModels";
import passport from "passport";

const Router = express.Router();


/*
* Route           /
* Description     Get authorized user data
* Params          none
* Access          Public
* Method          Get
*/
Router.get("/", passport.authenticate("jwt"), async(req, res)=>{
    try{
        const {email, phoneNumber, fullName, address} = req.session.passport.user._doc;
        return res.json({
            user:{email, phoneNumber, fullName, address}
        });
    }catch (error){
        return res.status(500).json({error: error.message});
    }
})




/*
* Route           /:_id
* Description     Get User Data
* Params          _id
* Access          Public
* Method          Get
*/

Router.get('/:_id', async (req,res)=>{
    try{
        const {_id} = req.params;
        const getUser = await UserModel.findById(_id)
        const {fullName} = getUser
        if(!getUser){
            return res.status(404).json({error:"User Not Found"})
        }
        return res.json({ user:{fullName} })
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /update
* Description     Update User Data
* Params          _id
* Access          Private
* Method          put
*/

Router.put("/update/:userId",async(req,res)=>{
    try {
     const{userId} = req.params;
     const{userData} = req.body;
    
     const updateUserData = await UserModel.findByIdAndUpdate(
         userId
     ,{
        $set:userData
     },{
         new:true,
     })
        return res.json({user:updateUserData})
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

export default Router;