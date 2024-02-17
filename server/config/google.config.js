import googleOAuth from 'passport-google-oauth20';
import {UserModel} from "../database/allModels";
import jwt from "jsonwebtoken";
require('dotenv').config();

const googleStrategy = googleOAuth.Strategy;

export default (passport) =>{
    passport.use(
        new googleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        },
            async( accessToken, refreshToken, profile, done)=>{
                //create a new user object
                const newUser = {
                    fullName:profile.displayName,
                    email:profile.emails[0].value,
                    profilePic: profile.photos[0].value
                };
                try{
                    //check the user exist
                    const user =await UserModel.findOne({email:newUser.email})
                    if(user){
                        //generate Token
                        const token = jwt.sign({user:{fullName: newUser.fullName, email: newUser.email}}, "ZomatoAPP");
                        //return user
                        done(null, {user, token})
                    }
                    else{
                        //create a new User
                        const user = await UserModel.create(newUser);

                        //generate Token
                        const token = jwt.sign({user:{fullName: newUser.fullName, email: newUser.email}}, "ZomatoAPP");

                        //return user
                        done(null, {user, token})
                    }

                }catch (err){
                    done(err,null)
                }
            }
        )
    );
    passport.serializeUser((userData, done)=>done(null, {...userData}));
    passport.deserializeUser((id, done) => done (null, id))
}