import React, { useState } from 'react'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/20/solid'
import useDarkMode from '../hooks/useDarkMode'


function ThemeToggle() {
    const [colorTheme, setTheme] = useDarkMode()
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    )

    const toggleDarkMode = () => {
        setTheme(colorTheme)
        setDarkMode(!darkMode)
    }
  return (
    <button 
    className='relative inline-flex h-6 w-11 cursor-pointer border-none ' 
    onClick={toggleDarkMode}
    >
        {darkMode ? <MoonIcon className='text-primary dark:text-warning'/> : <SunIcon className='text-primary dark:text-secondary'/>}
        </button>
  )
}

export default ThemeToggle