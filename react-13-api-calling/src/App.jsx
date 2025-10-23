
import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

// async function getData(){
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
//     console.log(data);
// }

const [data, setData] = useState([])
 const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');

    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
            return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
