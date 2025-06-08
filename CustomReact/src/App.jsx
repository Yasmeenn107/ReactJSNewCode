import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const[counter, setCounter]=useState(15)
 
  const addvalue=()=>{
     if (counter<20) {
       setCounter(counter+1)
     
    }
      
  }
  const RemoveValue= ()=>{
    if ( counter>0) {
      setCounter(counter-1) 
    }
   
    
  }

  return (
    <>
     <h1>React code</h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addvalue}>Add Value {counter}</button>
     <br/>
     <button onClick={RemoveValue}>Remove value{counter}</button>
    </>
  )
}

export default App
