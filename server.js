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


