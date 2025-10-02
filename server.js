const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path =require("path");

 const port = 3333;

 const app = express();



 app.listen(3333,()=>
 {
    console.log("you have connected to localhost:3333");
 }
);



app.use(express.urlencoded({extended:true}))
 
app.use(express.static(__dirname));


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
   phone:Number,
   textarea:String,
   delivery:String,
   orderDate: { type: Date, default: Date.now },
})

app.post("/submit",async (req,res)=>{
   const {first_name, last_name, address, phone, textarea, delivery}= req.body

   const user = new Users ({
      first_name,
      last_name,
      address,
      phone,
      textarea,
      delivery
   })

   await user.save()

   console.log(user)

   res.send("thanks you for shoopping in our website, we will send your delivery as soon as possible ")


})


const Users = mongoose.model("data", userSchema);
















