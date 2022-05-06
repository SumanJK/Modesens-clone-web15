const  express =  require("express")
const Parada=require('../models/parada.model')

const router =express.Router()

router.get("",async(req,res)=>{
    

  const page = req.query.page||1;
  const pagesize= req.query.pagesize||5;


  let skip = (page-1)*pagesize

  const data = await Parada.find()
  .skip(skip)
  .limit(pagesize)
  .lean().exec()
   
  const  totalpages= Math.ceil((await Parada.find().countDocuments())/pagesize)

return res.status(200).send({data,totalpages})

   
  })


router.post("",async(req,res)=>{
  const parada=await Parada.create(req.body)
  return res.status(200).send(parada)
})


router.patch("/:id",async(req,res)=>{
     const parada= await Parada.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(parada)
  })


  router.delete("/:id",async(req,res)=>{
      const parada = await Parada.findByIdAndDelete(req.params.id)
      return res.status(200).send(parada)
  })


module.exports=router;