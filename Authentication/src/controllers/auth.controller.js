
 const register= async (req, res) => {

    try{

        return res.status(200).send("registered")
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