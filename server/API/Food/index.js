//Libraries
import express from "express";

//model
import { FoodModel } from "../../database/allModel";

const Router  = express.Router();

/*
* Route          /r/:_id
* Description     Get all food based on particular restaurant
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/r/:_id", async (req ,res)=>{
    try{
        const{_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});
        return res.json({ foods })
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
})

/*
* Route          /c/:category
* Description     Get all food based on Category
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/category", async (req ,res)=>{
   try{
       const{ category } = req.params;
       const foods  =  await FoodModel.find({
           category: {$regex: category, $options:"i"}
       })
       if(!foods) return res.status(400).json({error:`No food matched with ${category}`})

       return res.json({foods})
   }catch (err) {
       return res.status(500).json({error:err.message});
   }

})

export default Router;