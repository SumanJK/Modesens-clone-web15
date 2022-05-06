const mongoose= require("mongoose")


    const boySchema = new mongoose.Schema({
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

   const Boy = new mongoose.model("boys",boySchema)

   module.exports=Boy;