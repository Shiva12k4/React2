import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useActionState } from 'react'
import './App.css'

function App() {
  const [counter,setcounter]=useState(0)
  const [msg,setmsg]=useState(false);
  


  const addValue = ()=>{
    if (counter < 20) {
    
    
    console.log('clicked',counter);
    setcounter(counter+1);//this does not work for multiple instance, only for single time update it works
    setcounter(counter+1);
    setcounter(counter+1);
    setcounter((prev)=>prev+1)//this will work for multiple time update in single cycle
    setcounter((prev)=>prev+1)
    setmsg(false);
    }
    else{
      setmsg(true)
    }
  }
  const removeValue=()=>{
    if(counter >0){
    setcounter(counter-1);
    setmsg(false);
  }else{
    setmsg(true)
  }
  }

  return (
    <>
     <h1>react</h1>
     <h2>counter value:{counter}</h2>
     {msg && <h2>no. can't be less than 0 or greater than 20</h2>}
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
