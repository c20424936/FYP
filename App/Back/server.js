//Imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";

//Create an Express application
const app = express();

//Connect to the MongoDB Atlas server 
mongoose.connect('mongodb+srv://c20424936:123Thegallops@cluster0.5tr2ag6.mongodb.net/BatteryCollection');
const db = mongoose.connection;
//if you dont connect 
db.on('error', (error) => console.log(error));
//if connection works
db.once('open', () => console.log('Database Connected...'));

//Set up the app to use all the routes and express 
app.use(cors());
app.use(express.json());
app.use(UserRoute);

//set the server to port 5000 
app.listen(5000, ()=> console.log('Server up and running...'));