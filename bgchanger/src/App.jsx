import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
   <>
   <div className='Color-change' style={{backgroundColor:color}}>
   
   <div className="Fixed">
    <div>
    <button className='Button' onClick={()=>setColor()} style={{color:"red"}}>Red</button>
    <button className='Button' onClick={()=>setColor()} style={{color:"green"}}>Green</button>
    <button className='Button' onClick={()=>setColor()} style={{color:"yellow"}}>Yellow</button>
    </div>
   
   </div>
   </div>
   </>
  )
}

export default App
