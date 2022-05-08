import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HeadingBeauty } from './components/HeadingBeauty'
import{Product} from "./components/Products"
import {PaginationSize} from "./components/PaginationOn"
// import{FilterDiv} from "./components/FilterDiv"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className='container'>

       <HeadingBeauty/>
       <div className='main'>
         <div className='fillter'>

        <div className='div-one'>MODESENS / SHOP / BEAUTY</div>
        <div className='div1'> 
          <p className='bold-text'>1000+ ITEMS</p>
          <img src="https://cdn.modesens.com/static/img/search_keyword_icon_20180510.svg" alt="" />
        </div>
        <div className='div2'>
          <p>Filter By:</p>
          <p>Reset</p>
        </div>
        <div>
          <select name="" className="opt">
            <option value="">Gender:All</option>
            <option value="">Men</option>
            <option value="">Women</option>
            <option value="">Kids</option>
          </select>
          <select name="" className="opt">
            <option value="">Gender:All</option>
            <option value="">Men</option>
            <option value="">Women</option>
            <option value="">Kids</option>
          </select>
          <select name="" className="opt">
            <option value="">Category:Beauty</option>
            <option value="">All</option>
            <option value="">Clothing</option>
            <option value="">Shoes</option>
            <option value="">Bags</option>
            <option value="">Home</option>
            
          </select>
          
        </div>
        <button className='btn-1'>SAVE MY SEARCH</button>
        <div className='div3'>
          MY SAVED SEARCH
          <div className='sub-div'>Related Category Women
          <p>Beauty Sale</p>
          <p>Beauty</p>
          <p>Home</p>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Clothing</p>
          <p>Shoes</p>
          






          </div>
          <div className='sub-div'>Related Category Men
          <p>Grooming Sale</p>
          <p>Grooming</p>
          <p>Home</p>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Clothing</p>
          <p>Shoes</p>
          







          </div>
          <div className='sub-div'>Related Category Kids
          <p> Care Sale</p>
          <p>Care</p>
          <p>Home</p>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Clothing</p>
          <p>Shoes</p>


          </div>
        </div>











         </div>
         <div className='products'><Product/> </div>
       </div>
       
    
      </div>



    </div>
  )
}

export default App
