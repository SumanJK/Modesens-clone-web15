const  express =  require("express")
const Beuty = require('../models/beuty.model')
const router =express.Router()



router.get("",async(req,res)=>{
   
    const beuty=await Beuty.find().lean().exec()
    const page = req.query.page||1;
    const pagesize= req.query.pagesize||5;
  
  
    let skip = (page-1)*pagesize
  
    const data = await Beuty.find()
    .skip(skip)
    .limit(pagesize)
    .lean().exec()
     
    const  totalpages= Math.ceil((await Beuty.find().countDocuments())/pagesize)
  
  return res.status(200).send({data,totalpages})
  
}

)
router.post("",async(req,res)=>{
    
     const beuty = await Beuty.create(req.body)
     return res.status(200).send(beuty)
})

router.patch("/:id",async(req,res)=>{
    const beuty = await Beuty.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send(beuty)

})

router.delete("/:id",async(req,res)=>{
    const beuty = await Beuty.findByIdAndDelete(req.params.id)
    return res.status(200).send(beuty)
})

module.exports=router;