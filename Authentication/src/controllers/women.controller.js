const  express =  require("express")

const Women = require('../models/women.model')

const router =express.Router()

router.get("/:id",async(req,res)=>{
    const women = await Women.findById(req.params.id).populate({path:"evaluationId",select:["date_of_evaluation","evaluation_id","-_id"]}).
    populate({path:"studentId",select:["roll_id","current_batch","-_id"]}).
    populate({path:"userId",select:["first_name","last_name","-_id"]}).lean().exec()
    return res.status(200).send(women)
   
  })

  router.get("",async(req,res)=>{
   
    const women = await Women.find().lean().exec()
    const page = req.query.page||1;
const pagesize= req.query.pagesize||15;


let skip = (page-1)*pagesize

const data = await Women.find()
.skip(skip)
.limit(pagesize)
.lean().exec()

const  totalpages= Math.ceil((await Women.find().countDocuments())/pagesize)

return res.status(200).send({data,totalpages})
  
   
  })


router.post("",async(req,res)=>{
  const women=await Women.create(req.body)
  return res.status(200).send(women)
})


router.patch("/:id",async(req,res)=>{
     const women= await Women.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(women)
  })


  router.delete("/:id",async(req,res)=>{
      const women = await Women.findByIdAndDelete(req.params.id)
      return res.status(200).send(women)
  })


module.exports=router;