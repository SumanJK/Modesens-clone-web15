const mongoose = require('mongoose');

require("dotenv").config();
//!  connecting to dataBase

module.exports = () =>{
    mongoose.connect("mongodb+srv://sumanJK:sumanJK@cluster0.m3pvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    
};
