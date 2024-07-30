import dotenv from 'dotenv'
import mongoose from 'mongoose'

const url = 'mongodb+srv://satty7319:saty1234@cluster0.23bwbqg.mongodb.net/App_database?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async() =>{

    await mongoose.connect(url).then(() =>{
        console.log('connect to database status:Successfully!')
    }).catch(error =>{
        console.log('failed to connect database status: failed! ')
    })
}


export default connectDB;