import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import { HeadingBeauty } from './components/HeadingBeauty'
// import{Product} from "./components/Products"
// import {PaginationSize} from "./components/PaginationOn"
// import{FilterDiv} from "./components/FilterDiv"
import Products from './pages/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <Products/>



    </div>
  )
}

export default App
