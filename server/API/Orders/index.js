import express from 'express'
import passport from "passport";
//models
import { OrderModel } from '../../database/allModels'
//Validate User
import validateUser from "../../config/validateUser";

const Router = express.Router()

/*
* Route           /
* Description     Get all order based on id
* Params          _id
* Access          Public
* Method          Get
*/

Router.get("/:_id",passport.authenticate("jwt"),async (req,res)=>{
    try{
        await validateUser(req,res)
    const{_id} = req.params;
    const getOrders = await OrderModel.findOne({user:_id})
    if(!getOrders){
        return res.status(404).json({error:"User Not Found"})
    }
    return res.status(200).json({orders:getOrders})
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /new
* Description     Add new order
* Params          _id
* Access          Public
* Method          Post
*/

Router.post("/new/:_id",passport.authenticate("jwt"), async(req, res) => {
    try{
        const {_id} = req.params;
        const{ orderDetails} = req.body;

        const addNewUser = await OrderModel.findOneAndUpdate(
            {
                user:_id
            },{
                $push:{orderDetails}
            },
            {
                new:true
            }
        )
    return res.json({ order:addNewUser });
    }catch (err){
        return res.status(500).json({error:err.message})
    }

})

export default Router