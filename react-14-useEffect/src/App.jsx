

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(5)
  
//  useEffect(() => {
//   console.log("Use effect is running");
  
// },[num, num2])  // it will run when num or num2 changes

const [a, setA] = useState(0)
const [b, setB] = useState(0)

function aChange(){
  console.log("Function a Change is called");
}

function bChange(){
  console.log("Function b Change is called");
}

useEffect(function(){
  aChange()
},[a])

  return (
    <div>
      {/* <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}
      onDoubleClick={()=>{
        setNum2(num2 + 10)
      }}
      >Click</button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}
      >Change B</button>

    </div>
  )
}

export default App
