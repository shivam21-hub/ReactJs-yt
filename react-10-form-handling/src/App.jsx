 import React from 'react'
import { useState } from 'react';
 
 const App = () => {
  const [count, setCount] = useState()

  function submitHandler(e){
    e.preventDefault()
    console.log("Form Submitted");
  }
   return (
     <div>
       <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter ur name'/>
        <input type="text" placeholder='Enter ur email'/>
        <button>Submit</button>
       </form>
     </div>
   )
 }
 
 export default App
 