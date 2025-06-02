import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import router from "./Routes/routes.js";

dotenv.config()

const app = express();
const port = 8000;

//Middlewares 
app.use(cors())
app.use(express.json())
app.use("/api/v1" , router)


//MONGODB connection 
;(async()=>{
 
try {
  await  mongoose.connect(process.env.MONGODB_URI)
    console.log("MONGODB connected successfully")
    



} catch (error) {
    console.log("error during connecting MONGODB" , error)
    process.exit(1);
}


})(); 


app.listen(port , ()=>{

    console.log(`server started succesfully at port ${port}`)
})
