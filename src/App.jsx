import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HeadingBeauty } from './components/HeadingBeauty'
import{Product} from "./components/Products"
import {PaginationSize} from "./components/PaginationOn"
import{FilterDiv} from "./components/FilterDiv"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
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

export default App
