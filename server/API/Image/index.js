//Libraries
import express from 'express';
import AWS from 'aws-sdk';
import multer from 'multer';
import debug from 'debug';
const log = debug('app');



//Models
import { ImageModel } from '../../database/allModels';

const Router = express.Router();


//multer config
const storage = multer.memoryStorage();
const upload  = multer({ storage });

//aws s3 bucket

//S3 Utils
import {s3Upload} from "../../utils/s3"

/*
* Route           /
* Description     Uploads given image to S3 bucket and save file link to MongoDB
* Params          none
* Access          Public
* Method          Post
*/

Router.post("/", upload.single("file"), async(req,res) => {
    try{
        const file =req.file;

        //s3 bucket options
        const bucketOptions = {
            Bucket:"zomato-images556",
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimeType,
            ACL:"public-read",
        }
        const uploadImage = await s3Upload( bucketOptions);
        const saveImageToDB = await ImageModel.create({images: [{location: uploadImage.Location}]})
        return res.status(200).json(saveImageToDB)

    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

export default Router;