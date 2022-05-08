import { useState } from 'react'
// import logo from './logo.svg'
import './products.css'
import { HeadingBeauty } from '../components/HeadingBeauty'
import{Product} from "../components/Products"
import {PaginationSize} from "../components/PaginationOn"
import{FilterDiv} from "../components/FilterDiv"


function Products() {
  const [count, setCount] = useState(0)

  return (
    <div className="Wraper">
      
      <div className='container'>

       <HeadingBeauty/>
       <div className='main'>
         <div className='fillter'><FilterDiv/></div>
         <div className='products'><Product/> </div>
       </div>
       
    
      </div>



    </div>
  )
}

export default Products
