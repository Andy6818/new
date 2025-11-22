const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path =require("path");

 const port = 3355;

 const app = express();

 app.use(express.json());


app.listen("3355", ()=>{
   console.log(" you have connected to localhost:3333")
})

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
  
  userInfo: {
    first_name: String,
    last_name: String,
    address: String,
    delivery:String,
    phone:Number,
    textarea:String
  },
 
  cartItems: [
    {
      
   
      items:[{id: Number,
      name: String,
      image: String,
      price: Number,
      description:String,}],
      total: Number
      
    }
  ],
  orderDate: { type: Date, default: Date.now}
 })

app.post("/api/checkout",async (req,res)=>{
   const {
        userInfo,
      
        cartItems
 
   }= req.body

//    console.log("user:", userInfo)
// console.log("cart:", cartItems)


   const user = new Users ({
      userInfo,
     
    cartItems
    

  


})
               
   await user.save()
 
   console.log(user)

   res.send("thanks you for shoopping in our website, we will send your delivery as soon as possible ")
})

 





const Users = mongoose.model("data", userSchema);


app.post("/api/checkout", async (req, res) => {
  try {
    const checkout = new Users(req.body); // contains both userInfo + cartItems
    await checkout.save();

    res.json({ message: "Checkout saved", data: checkout });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



















