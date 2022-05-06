const  express =  require("express")
const { status } = require("express/lib/response")
const mongoose = require("mongoose")
const cors= require("cors")
const connect= require('./configs/db')
const Boy =require("./models/boy.model")
const Kid = require('./models/kids.model')
const Men=require('./models/men.model')
const Women=require('./models/women.model')
const Parada = require('./models/parada.model')
const Beuty = require('./models/beuty.model')

const boyController = require('./controllers/boy.controller')
const kidController= require('./controllers/kids.controller')
const menController=require('./controllers/men.controller')
const womenController=require('./controllers/women.controller')
const paradaController=require('./controllers/parada.controller')
const beutyController=require('./controllers/beuty.controller')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/paradas",paradaController)
app.use("/boys",boyController)
app.use("/mens",menController)
app.use("/kids",kidController)
app.use("/womens",womenController)
app.use("/beuties",beutyController)


 
app.listen(process.env.PORT || 5000,()=>{
    connect()
    console.log("port listening 5000")
})