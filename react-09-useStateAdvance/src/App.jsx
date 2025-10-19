 import React, { useState } from 'react'
 
 const App = () => {
  const [count, setCount] = useState({user:"Shivam", age:22})

  const btnClicked = ()=>{
    const newUser = {...count}
    newUser.user = "Sangita"
    newUser.age = 25
    setCount(newUser)
  }
   return (
     <div>
       <h1>{count.user}, {count.age}</h1>
       <button onClick={btnClicked}>Click</button>
     </div>
   )
 }
 
 export default App
 