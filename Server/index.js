const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const cors = require('cors')
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


const SuperAdmin=require('./Routes/SuperAdmin_routes');
const Admin=require('./Routes/Admin_routes');
const User=require('./Routes/User_routes');
const Vendor=require('./Routes/Vendor_routes');
const { read } = require("fs");


app.use(cors())
app.use(express.json());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/superadmin', SuperAdmin);
app.use('/user', User);
app.use('/requirement',Admin);
app.use('/candidate',Vendor);


app.listen("5000", () => {
    
    console.log("Backend is running.");
  });