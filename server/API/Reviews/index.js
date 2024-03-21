import express from "express";
import passport from "passport";

//models
import{ReviewModel} from "../../database/allModels"

const Router = express.Router();

/*
* Route           /:resid
* Description     Get all review for a particular restaurant
* Params          resid
* Access          Public
* Method          Get
*/

Router.get("/:resid",async ( req,res) => {
    try {
     const {resid} = req.params;

     const reviews = await ReviewModel.find({restaurant: resid});

     return res.json({reviews})
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /new
* Description     POST: Adding new food/restaurant reviews and rating
* Params          none
* Access          Private
* Method          Post
*/

Router.post("/new", passport.authenticate("jwt") , async (req,res)=>{
    try{
        const { _id } = req.session.passport.user._doc;
        const {reviewData} = req.body;
        await ReviewModel.create({...reviewData , user:_id})
        return res.json({reviews: "Successfully Created Review"})
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/*
* Route           /delete
* Description     Delete a specific review
* Params          _id
* Access          Public
* Method          delete
*/

Router.delete('/:_id', async(req ,res )=>{
    try {
     const{_id} =req.params;
     await ReviewModel.findByIdAndDelete(_id);
     return res.json({review:"Successfully deleted the review"})
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

export default Router