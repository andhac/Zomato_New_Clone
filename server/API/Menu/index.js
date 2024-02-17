import express from "express";

//model
import {MenuModel,ImageModel} from "../../database/allModel";

const Router = express.Router()

/*
* Route           /list
* Description     Get all list of menu based on Resturant id
* Params          _id
* Access          Public
* Method          Get
*/

Router.get("/list/:_id", async (req,res)=>{
    try{
        const {_id} = req.params
        const menu= await MenuModel.findById(_id);
        if(!menu){
            return res.status(404).json({error:"No menu present for this restaurant"})
        }
        return res.json({menu});
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /image
* Description     Get all list of menu images with restaurant id
* Params          _id
* Access          Public
* Method          Get
*/

Router.get("/image/:_id", async (req,res)=>{
    try{
        const{ _id } = req.params;
        const menuImages = await ImageModel.findOne(_id)
        //validate if the image is present or not, throw error if not present
        if(!menuImages){
            return res.status(404).json({error:"No image found for this menu"})
        }
        return res.json({menuImages})

    }catch (err){
        return res.status(500).json({error:err.message})
    }
})
export default Router;