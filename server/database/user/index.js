import mongoose from "mongoose";
import jwt from "jsonwebtoken";

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

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
};
export const UserModel = mongoose.model('Users', UserSchema);
