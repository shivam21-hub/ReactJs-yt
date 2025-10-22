
import React from 'react'

const App = () => {
// localStorage.setItem("name","shivam") 
// localStorage.setItem("age","22")
// const name = localStorage.getItem("name")
// console.log(name);

localStorage.clear()
const user = {
  name:"shivam",
  age:22,
  city:"kolkata"

}
localStorage.setItem("user",JSON.stringify(user)) // to convert object to string because localstorage only store string

const userdata = JSON.parse(localStorage.getItem("user")) // to convert string back to object
console.log(userdata);


  return (
    <div>
      shivam
    </div>
  )
}

export default App
