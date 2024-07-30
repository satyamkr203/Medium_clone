import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import authRoutes from '../backend/routes/authRoutes.js'
import connectDB from './config/db.js';
dotenv.config();

// defining port 
const port = process.env.PORT || 3000;

// adding database 
connectDB();

// adding middlewares 
const app = express();
app.use(cors());
app.use(express.json());

// defining the routes

app.use("/api/user/auth", authRoutes)



app.listen(port, () =>{
    console.log("server is running on the port " + port);
})

