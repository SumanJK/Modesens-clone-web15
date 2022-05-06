
 const User= require("../models/user.model");

 const register= async (req, res) => {

    try{

         let user= await User.findOne({email: req.body.email})
        //! checking if email exists
         if(user){
             return res.status(200).send({message: "Email already exists"})
         }
        //! if not exist then create one
         user= await User.create(req.body);

         return res.status(201).send(user)

    }catch(err){
        res.status(500).send(err.message)
    }

}

const login= async (req, res) => {
    try{
        return res.status(200).send("logged in")
    }catch(err){
        res.status(500).send(err.message)
    }
}

module.exports= {register,login}