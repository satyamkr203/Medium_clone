import dotenv from 'dotenv'
import mongoose from 'mongoose';
const url = 'process.env.MONGO_URL';
const connectDB = async() =>{

    await mongoose.connect(url).then(() =>{
        console.log('connect to database status:Successfully!')
    }).catch(error =>{
        console.log('failed to connect database status: failed! ')
    })
}


export default connectDB;
