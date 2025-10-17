import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     
      <Card user ="Shivam Chowbey" img="https://images.unsplash.com/photo-1759399703184-11a722ec0706?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user="Sangita Das" img = "https://plus.unsplash.com/premium_photo-1759937765271-2ac02feb860b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=689"/>
    </div>
  )
}

export default App