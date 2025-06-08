import { useState,useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumAllowed] = useState(false)
  const [allchar, setAllchar] = useState(false)
  const [password, setPassword] = useState("")

  const PasswordGenerator= useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallowed) str += "0123456789"
    if (allchar) str += "!@#$%^&*(){}~`"
    for (let i = 1; i <=length; i++) {
    let char= Math.floor(Math.random() * str.length+1)
    pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length,numallowed,allchar,setPassword])
 
  useEffect(()=>{
    PasswordGenerator()
  },[length,allchar,numallowed, PasswordGenerator])
  return (
    <div>
      <input type='text' placeholder='Password' readOnly value={password}></input>
      <div>
      <input type='range' min={5} max={100} value={length} onChange={(e)=> setLength(e.target.value)}></input>
      <label>Length {length}</label>
 
     <input type='checkbox' defaultChecked={numallowed} onChange={()=> setNumAllowed((prev)=>!prev)}  ></input>
     <label>Numbers </label>
     <input type='checkbox' defaultChecked={allchar} onChange={()=> setAllchar((prev)=>!prev)} ></input>
     <label>Character</label>
     </div>
    </div>
      
  )
}

export default App
