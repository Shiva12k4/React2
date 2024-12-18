import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useref hook-use to take reference 
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str = str + "0123456789"
    }

    if (charAllowed) {
      str = str + "!@#$%^&*()_+|}{?><"
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPassword = useCallback(() => {

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 2)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <h1 className=" text-4xl text-white">password Generator</h1>
      <div className='w-full flex max-w-md mx-auto p-2 my-8 bg-white text-pink-500
     rounded-md  '><input type="text" value={password} placeholder='password' className='outline-none w-full py-1 px-3' readOnly ref={passwordRef} />
        <button onClick={copyPassword} className='bg-green-400'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>


          <input type="range" max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          <label className='text-emerald-400'>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>

          <input type="checkbox" defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => { setNumberAllowed((prev => !prev)) }} />
          <p className='text-green-400'>Numbers</p>

          <input type="checkbox" defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => { setCharAllowed((prev => !prev)) }} />
          <p className='text-green-400'>Characters</p>
        </div>
      </div>

    </>
  )
}

export default App


//usecallback----->optimize by  memorize fn as much as possible

//useeffect-->page load k time p yajb bhi koi changes hote h toh use hota h 

//copyto clipboard


//useref---give reference of any element and manupulate it 
//line 10 and line 44 are link together