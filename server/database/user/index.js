import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address:[{
        detail: {type: String},
        for: {type: String}
    }],
    phoneNumber: {
        type: Number
    }
},
    {
        timestamps: true
    });

// UserSchema.methods.genrateJwtToken = ()=>{
//     return  jwt.sign({user: this._id.toString()},"ZomatoAPP");
// }
//
// //Check whether the user is already exist
// UserSchema.statics.findByEmailAndPhone = async ({email,phoneNumber}) => {
//     const checkByEmail = await UserModel.findOne({ email });
//     const checkByPhone = await UserModel.findOne({ phoneNumber });
//
//     if (checkByEmail || checkByPhone){
//        throw new Error("User Already Exist!!!")
//     }
//
//     return false;
// }
//
// //check the email and password
// UserSchema.statics.findByEmailAndPassword = async ({email,password}) => {
//     const user = await UserModel.findOne({email});
//     if(!user) throw new Error("User does not exist!!!");
//
//     //Password Match
//     const doesPasswordMatch = await bcrypt.compare(password,user.password);
//     if(!doesPasswordMatch) throw new Error("Invalid Password!!!");
//
//     return user;
// }
//
// //hashing generation
// UserSchema.pre("save", function ( next ){
//     const user = this;
//     //password is modified
//     if(!user.isModified("password")) return next
//
//     //generating bcrypt salt
//     bcrypt.genSalt(8, ( error,salt )=>{
//         if(error) return next(error);
//
//         //hash password
//         bcrypt.hash(user.password,salt, ( error,hash ) => {
//             if (error) return next(error)
//              //assigned hash password
//             user.password = hash
//         })
//     })
// })
export const UserModel = mongoose.model('Users', UserSchema);
