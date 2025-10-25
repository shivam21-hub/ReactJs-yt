
import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    function changeTheme() {

        setTheme(theme === 'light' ? 'dark' : 'light')
        
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme {theme} </button>
    </div>
  )
}

export default Button
