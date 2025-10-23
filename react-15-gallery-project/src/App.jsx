
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const  getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-0.5 -translate-y-1/2 font-bold'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white '>
      {/* <h1 className='fixed text-5xl'>{index}</h1> */}
      <div className='flex h-[85%] flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-4'>

        <button 
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }}
            style={{opacity: index==1 ? 0.5 : 1}}
            className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded-2xl px-4 py-2 font-bold'>
            Prev
        </button>
          <h4>Page {index}</h4>
        <button
            onClick={()=>{
              setIndex(index+1)
              setUserData([])
            }}
            className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded-2xl px-4 py-2 font-bold'>
            Next
        </button>

      </div>
    </div>
  )
}

export default App
