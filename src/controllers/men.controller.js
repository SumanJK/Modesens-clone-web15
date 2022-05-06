const  express =  require("express")

const Men = require('../models/men.model')

const router =express.Router()

router.get("",async(req,res)=>{
    const men = await Men.find().lean().exec()
    const page = req.query.page||1;
    const pagesize= req.query.pagesize||15;
  
  
    let skip = (page-1)*pagesize
  
    const data = await Men.find()
    .skip(skip)
    .limit(pagesize)
    .lean().exec()
     
    const  totalpages= Math.ceil((await Men.find().countDocuments())/pagesize)
  
  return res.status(200).send({data,totalpages})
  
   
  })


router.post("",async(req,res)=>{
  const men=await Men.create(req.body)
  return res.status(200).send(men)
})


router.patch("/:id",async(req,res)=>{
     const men= await Men.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(men)
  })


  router.delete("/:id",async(req,res)=>{
      const men = await Men.findByIdAndDelete(req.params.id)
      return res.status(200).send(men)
  })


  module.exports=router;