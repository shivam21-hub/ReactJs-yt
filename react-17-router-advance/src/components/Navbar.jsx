
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-8 py-4 bg-amber-950'>
      <h2 className='text-xl font-bold'>Shivam Chowbey</h2>
      <div className='flex gap-8'>
        <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/about">About</a>
        <a className='text-lg font-bold' href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
