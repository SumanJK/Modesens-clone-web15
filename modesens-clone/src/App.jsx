import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {WomenPageBrand} from './Pages/WomenPageBrand'
import {Mens} from "./Pages/Mens"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Mens />
      {/* <WomenPageBrand /> */}

    </div>
  )
}

export default App
