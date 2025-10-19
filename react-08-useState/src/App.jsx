
import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    // const [users, setUsers] = useState(["shivam ", "sangita " , "motimala"])
   
    function clickHandler(){
       setCount(count+1)
    //    setUsers(["chowbey ", "das ", "devi"])
    }

    function clickHandlerdec(){
        if(count>0){
            setCount(count-1)
        }
    }
  return (
    // <div>
    //     <h1>the value of count {count}, {users}</h1>
    //     <button onClick={clickHandler}>Click me</button>
    // </div>

    <div>
        <h1>Count {count}</h1>
        <button onClick={clickHandler}>Increase</button>
        <button onClick={clickHandlerdec}>Decrease</button>
    </div>
  )
}

export default App
