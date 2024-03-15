const express=require('express');
const cors=require('cors')
const morgan=require('morgan')
// const colors=require('colors')
// const dotenv=require("dotenv");
const connectDB=require("./config/db")

//env config
// dotenv.config();

//routes import 
const userRoute=require('./routes/userRoutes')
const blogRoute=require('./routes/blogRoutes')

//mongoDB connection
connectDB();



// rest object 
const app= express()

// /middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))



// //routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/blog",blogRoute);

//Port
const PORT=process.env.PORT  || 8080;
//listen
app.listen(8080,()=>{
    console.log(`server Running on ${process.env.DEV_MODE} mode port ${PORT}`.bgCyan.white);
});