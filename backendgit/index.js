import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';    
import postRoutes from "./routes/appointment.js";

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use('/posts' , postRoutes);
const connection_url="mongodb+srv://JMBDDDIGITAL:JMBDDDIGITAL@cluster0.gremxsu.mongodb.net/?retryWrites=true&w=majority";
//PASSWORD:JMBDDDIGITAL
const PORT=process.env.PORT || 5000; 

mongoose.connect(connection_url ,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>app.listen(PORT , ()=>console.log(`Server is running on port :${PORT}`)))
.catch((error)=>console.log(error.message));
// mongoose.set('useFindAndModify' , false);