import { useState } from 'react'
import logo from './logo.svg'
import {Footer} from "./Components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Footer/>
    </div>

  )
}

export default App
