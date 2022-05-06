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

router.get("/search/:key", async (req, res) => {

    try {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        let result= capitalizeFirstLetter(req.params.key);
        let resp= req.params.key
        const searchedItem= await Beuty.find(
            {
                "$or": [
                    {"title":{$regex: result}},
                    {"title":{$regex: resp}}
                ]
            }
        ).lean().exec();
        return res.status(200).send(searchedItem);

    }catch (err) {

        return res.status(500).send(err.message);
    }
});

module.exports=router;