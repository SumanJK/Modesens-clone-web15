const mongoose = require("mongoose")

const menSchema= new mongoose.Schema({
    brand :{type:String,required:true},
    image_url:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    offprice:{type:Number,required:true}
  
   
   
},
{
    timestamps:true,
    versionKey:false
}
)


const Men = new mongoose.model("mens",menSchema)

module.exports=Men