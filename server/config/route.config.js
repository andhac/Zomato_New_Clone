import JwtPassport from "passport-jwt"

//Database Model
import {UserModel} from "../database/allModels"

const jwtStrategy =JwtPassport.Strategy;
const extractJwt =JwtPassport.ExtractJwt

const option = {
    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomatoAPP"
}

export default (passport)=>{
    passport.use(
        new jwtStrategy(option,async (jwt__payload,done)=>{
            try{
                const doesUserExist = await UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null,false);
                return done(null,doesUserExist)
            }catch (err){
                throw new Error(err)
            }
        })


    )
}