const  express =  require("express")

const Kid = require('../models/kids.model')
const router =express.Router()

router.get("/:id",async(req,res)=>{
    const kid = await Kid.findById(req.param.id).populate({path:"userId",select:["first_name","last_name","DOB"]}).lean().exec()
    return res.status(200).send(kid)
})
  router.get("",async(req,res)=>{
        const kid = await Kid.find().lean().exec()
        const page = req.query.page||1;
  const pagesize= req.query.pagesize||5;


  let skip = (page-1)*pagesize

  const data = await Kid.find()
  .skip(skip)
  .limit(pagesize)
  .lean().exec()
   
  const  totalpages= Math.ceil((await Kid.find().countDocuments())/pagesize)

return res.status(200).send({data,totalpages})
       
      })

  router.post("",async(req,res)=>{
      const kid=await Kid.create(req.body)
      return res.status(200).send(kid)
  })
  
  
  router.patch("/:id",async(req,res)=>{
         const kid= await Kid.findByIdAndUpdate(req.params.id,req.body,{new:true})
         return res.status(200).send(kid)
      })
  
  
      router.delete("/:id",async(req,res)=>{
          const kid = await Kid.findByIdAndDelete(req.params.id)
          return res.status(200).send(kid)
      })

      module.exports=router;