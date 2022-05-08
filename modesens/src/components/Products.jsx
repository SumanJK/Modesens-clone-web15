// import { Item } from "framer-motion/types/components/Reorder/Item"

import { useStyleConfig } from "@chakra-ui/react"
import { Pagination } from "@mui/material"
import { useEffect, useState } from "react"
// import "Products.css"
import "./product.css"

// import { PaginationSize } from "./PaginationOn"


export const Product=()=>{

    const [mydata,setdata]= useState([])
    // const [page,setPage1]=useState(1)
    // const [count,setCount]=useState(1)


    

    useEffect(()=>{
        getData()

    },[])
    async function getData(){
        // const data2=await fetch(`http://localhost:3004/products`).then((d)=>d.json())
        const data=await fetch(`https://modesense-masai.herokuapp.com/beuties`).then((d)=>d.json())
        
        // setCount(Math.floor(data2.length/16))
        
        console.log(data)
        setdata(data.data)
        
      }
    //   console.log(page)
      
  console.log("mydata",mydata)
  return(
       
      <div className="div-main"> 
      <div className="pag-div">
      {/* <PaginationSize count1={count} page1={page} setPage1={setPage1} /> */}
      <div className="sort-div">
          <img className="view-sort"  src="https://cdn.modesens.com/static/img/20210908column2.svg" alt="" />
          <img  className="view-sort" src="https://cdn.modesens.com/static/img/20210908column3.svg" alt="" />
          <img className="view-sort"  src="https://cdn.modesens.com/static/img/20210908column4_active.svg" alt="" />
          <select className="options" name="" id="">
              <option value="">Best Sellers</option>
              <option value="">New Arrivals</option>
              <option value="">Most Liked</option>
              <option value="">Highest Price</option>
              <option value="">Lowest Price</option>
              <option value="">New Sales</option>
              <option value="">Largest Discount Amount</option>
              <option value="">Largest Discount Percentage</option>
          </select>
      </div>
      </div>
      <div className="all-products"> 
          {mydata.map((e)=>{
             return (
                 <div className="product-div">
         
                     <div>
                         <div className="wish"><img src="https://cdn.modesens.com/static/img/20210601heart.svg" alt="" /></div>
                         <div className="img-div">
                             
                             <img src={e.image_url} alt="" />
                         </div>
                         <div className="hover-btn">
                             <button className="btn2">Quick View</button>
                         </div>
                     </div>
                     <div>
                     <h3 className="name">{e.brand}</h3>
                     <p className="tag">{e.title}</p>
                     <p className="price">${e.price} - ${e.offprice}</p>
                     <p className="store">{e.store}</p>
                     </div>

                 </div>
             )
          })}
      </div>
      </div>
  )
 
}