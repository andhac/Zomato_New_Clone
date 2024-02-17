import express from "express";

//models
import{UserModel} from "../../database/allModels";

const Router = express.Router();

/*
* Route           /
* Description     Get User Data
* Params          _id
* Access          Public
* Method          Get
*/

Router.get('/:_id', async (req,res)=>{
    try{
     const {_id} = req.params;

     const getUser = await UserModel.findById(_id)
        if(!getUser){
            return res.status(404).json({error:"User Not Found"})
        }
        return res.json({ user:getUser })
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