import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Login} from "./Components/Login"
import {SignUp} from "./Components/SignUp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      <SignUp/>
    </div>
  )
}

export default App
