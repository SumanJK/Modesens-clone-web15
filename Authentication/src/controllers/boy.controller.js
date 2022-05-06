const  express =  require("express")
const Boy = require('../models/boy.model')
const router =express.Router()



router.get("",async(req,res)=>{
   
    const boy=await Boy.find().lean().exec()
    const page = req.query.page||1;
    const pagesize= req.query.pagesize||5;
  
  
    let skip = (page-1)*pagesize
  
    const data = await Boy.find()
    .skip(skip)
    .limit(pagesize)
    .lean().exec()
     
    const  totalpages= Math.ceil((await Boy.find().countDocuments())/pagesize)
  
  return res.status(200).send({data,totalpages})
  
}

)
router.post("",async(req,res)=>{
    
     const boy = await Boy.create(req.body)
     return res.status(200).send(boy)
})

router.patch("/:id",async(req,res)=>{
    const boy = await Boy.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send(boy)

})

router.delete("/:id",async(req,res)=>{
    const boy = await Boy.findByIdAndDelete(req.params.id)
    return res.status(200).send(boy)
})

module.exports=router;