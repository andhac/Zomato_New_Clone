//Libraries
import express from "express";

//Model
import { RestaurantModel } from "../../database/allModels";
//validation

import{validateRestaurantSearchString,validateCity} from "../../validation/restaurant";
import {validateId} from "../../validation/common";

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
        await validateCity(req.query)
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
        await validateId(req.params)
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
        await validateRestaurantSearchString(req.params)
        const {searchString} = req.params;
        const restaurant = await RestaurantModel.find({
            name:{$regex: searchString, $options: "i"}
        })

        if(!restaurant)return res.status(400).json({error:`No restaurant matdched with ${searchString}`})
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
})

Router.post("/", async(req, res) => {
    try {
        const addRestaurant = await RestaurantModel.create(req.body)
        return res.status(200).json(addRestaurant)
    }catch (err) {
        return res.status(500).json({error:err.message});
    }
})

export default Router;