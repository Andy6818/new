const express = require("express");
const mongoose = require("mongoose");

const path =require("path");

 const port = 3333;

 const app = express();

 app.listen(3333,()=>
 {
    console.log("you have connected to localhost:3333");
 }
)



app.use(express.static(__dirname));
 
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{

   res.sendFile(path.join(__dirname,"index.html"))
   console.log("you have connected you browser")
})


mongoose.connect("mongodb://127.0.0.1:27017/student")

const db = mongoose.connection;


db.once("open",()=> {
   console.log("congratualation you have been connected to mongodb database")
})




const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    address:String,
   
})


app.post("/post", async (req,res)=>{

   const{
      first_name,
      last_name,
      address,
   }=req.body

   const user = new Users ({
      first_name,
      last_name,
      address,
   })

   await user.save()

   console.log(user)

   res.sendFile(path.join(__dirname,"index.html"))
})


const Users = mongoose.model("data", userSchema)



