import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: true, 
        unqiue: true,
    }, 
    email:{
        type:String, 
        required: true, 
        unqiue: true,
    }, 
    password: {
        type: String, 
        required: true,
    }
}, {timestamps:true})

const User = mongoose.model('User', userSchema);


export default User;