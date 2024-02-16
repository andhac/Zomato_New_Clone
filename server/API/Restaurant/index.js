//Libraries
import express from "express";

//Model
import { RestaurantModel } from "../../database/allModel";

const Router = express.Router();

/*
* Route           /
* Description     Get all the restaurant details based on city
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/", async (req, res)=>{
    try{
        const {city} =req.query;
        const restaurant  = await RestaurantModel.find({ city });
        if(restaurant.length ===0){
            return res.status(404).json({error: `No Restaurant found for ${city}`});
        }
        return res.json({ restaurant });

    }catch (err) {
        return res.status(500).json({error:err.message});
    }
})

/*
* Route           /:_id
* Description     Get individual restaurant details based on id
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/:_id", async (req, res)=>{
    try{
    const{_id} = req.params;
    const restaurant = await RestaurantModel.findById(_id);

    if(!restaurant)
        return res.status(400).json({error: "Restaurant Not Found"})

    return res.json({ restaurant })
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
})

/*
* Route           /search
* Description     Get restaurant detail based on search request
* Params          none
* Access          Public
* Method          GET
*/

Router.get("/search/:searchString", async (req, res)=>{
    try{
        const {searchString} = req.params;
        const restaurant = await RestaurantModel.find({
            name:{$regex: searchString, $options: "i"}
        })

        if(!restaurant)return res.status(400).json({error:`No restaurant matdched with ${searchString}`})
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
})

export default Router;