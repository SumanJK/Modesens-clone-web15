import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Slidingnew } from './components/Slidingnew'
import { Bhead } from './components/Bhead'
import {Brand} from './components/Brand'
import Slide from './components/Slider'
import {Trending} from './components/Trending'
import {Bottom} from './components/Bottom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Slidingnew />
      <Bhead />
      <Brand />
      <Slide /> 
      <Trending />
      <Bottom /> 
    </div>
  )
}

export default App
