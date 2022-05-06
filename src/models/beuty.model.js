const mongoose= require("mongoose")


    const beutySchema = new mongoose.Schema({
      image_url:{type:String,required:true},
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

   const Beuty = new mongoose.model("beuties",beutySchema)

   module.exports=Beuty;