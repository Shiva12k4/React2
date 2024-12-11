import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useActionState } from 'react'
import './App.css'

function App() {
  const [counter,setcounter]=useState(0)

  const addValue = ()=>{
    console.log('clicked',counter);
    setcounter(counter+1)
    
  }
  const removeValue=()=>{
    setcounter(counter-1);
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
