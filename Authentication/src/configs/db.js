const mongoose = require('mongoose');

require("dotenv").config();
//!  connecting to dataBase

module.exports = () =>{
    mongoose.connect(process.env.DATABASE);
    
};
