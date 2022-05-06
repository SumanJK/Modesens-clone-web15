const mongoose=require("mongoose")

 const kidSchema= new mongoose.Schema({
  image_url:{type:String,required:true},
  brand :{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    offprice:{type:Number,required:true}
    
    
},
{
  timestamps:true,
  versionKey:false  
}
)

const Kid= new mongoose.model("kids",kidSchema)

module.exports=Kid;