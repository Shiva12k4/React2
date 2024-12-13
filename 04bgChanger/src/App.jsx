import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  return (
    
      <div className="" style={{backgroundColor:color, width:"100vw" , height:"100vh"}}>
       
       <div className="fixed flex justify-center flex-wrap flex-col right-12 inset-y-0 ">
        
        <div className="flex flex-wrap flex-col justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-lg">

          <button onClick= {()=>setColor('red')}className='bg-red-500' >red</button>
          <button onClick=  {()=>setColor('yellow')}className='bg-yellow-500' >yellow</button>
          <button onClick=  {()=>setColor('blue')}className='bg-blue-500' >blue</button>
        </div>
        
        
        
        
        </div>
        
      </div>
    
  )
}

export default App
