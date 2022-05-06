const mongoose = require("mongoose")

const paradaSchema= new mongoose.Schema({

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


const Parada = new mongoose.model("paradas",paradaSchema)

module.exports=Parada;