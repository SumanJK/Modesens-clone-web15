// import { Item } from "framer-motion/types/components/Reorder/Item"

import { useStyleConfig } from "@chakra-ui/react"
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"
// import "Products.css"
import "./product.css"

import { PaginationSize } from "./PaginationOn"


export const Product=()=>{

    const [mydata,setdata]= useState([])
    const [page,setPage1]=useState(1)
    const [count,setCount]=useState(1)


    

    useEffect(()=>{
        getData()

    },[page])
    async function getData(){
        const data2=await fetch(`http://localhost:3004/products`).then((d)=>d.json())
        const data=await fetch(`http://localhost:3004/products?_page=${page}&_limit=6`).then((d)=>d.json())
        
        setCount(Math.floor(data2.length/6))
        
        console.log(data)
        setdata(data)
        
      }
      console.log(page)
      
  console.log("mydata",mydata)
  return(
       
      <div className="div-main"> 
      <PaginationSize count1={count} page1={page} setPage1={setPage1} />
      
      <div className="all-products"> 
          {mydata.map((e)=>{
             return (
                 <div className="product-div">

                     <div>
                         <div className="wish">wishlist</div>
                         <div className="img-div">
                             <img src={e.image} alt="" />
                         </div>
                     </div>
                     <div>
                     <h3 className="name">{e.name}</h3>
                     <p className="tag">{e.tag}</p>
                     <p className="price">{e.price}</p>
                     <p className="store">{e.store}</p>
                     </div>

                 </div>
             )
          })}
      </div>
      </div>
  )
 
}