import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
    
  }




  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

         {/* PHLA INPUT FOR HEADING */}
        <input
         type="text"
         placeholder='Enter Notes Heading'
         className='px-5 py-2 font-medium w-full  border-2 outline-none rounded'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
          
         }}
        />

       {/* DETAILED WALA INPUT */}
        <textarea 
        type="text" 
        placeholder='Write Details'
        className='px-5 py-2 font-medium w-full  border-2 outline-none h-32 flex items-start flex-row'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        />

        <button
          className='bg-white active:bg-gray-500 font-medium outline-none text-black px-5 py-2 w-full rounded'>
          Add Notes
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          
      {task.map(function(elem, idx){

        return <div key={idx} className='relative flex flex-col justify-between items-start h-50 w-40 rounded-xl pt-9 pb-4 px-4 text-black  bg-cover bg-[url("https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_1280.png")]'>
          <div>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
          </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full py-1 text-xs text-black bg-red-600 rounded-2xl font-bold cursor-pointer active:scale-95'>Delete</button>
        </div>
      })}
        </div>
      </div>
    </div>
  )
}

export default App
