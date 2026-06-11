import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])

  return (
    <>
    <button>
        {theme === 'dark' ? (
            <img onClick={()=> setTheme('light')} src={assets.sun_icon} className='inline-flex items-center dark:hover:bg-white/5 dark:hover:text-white/90 hover:bg-gray-100 hover:text-gray-800 text-gray-500 dark:text-gray-400 justify-center border border-gray-200 dark:border-gray-700 rounded-full size-8' alt="" />
        ) : (
            <img onClick={()=> setTheme('dark')} src={assets.moon_icon} className='inline-flex items-center dark:hover:bg-white/5 dark:hover:text-white/90 hover:bg-gray-100 hover:text-gray-800 text-gray-500 dark:text-gray-400 justify-center border border-gray-200 dark:border-gray-700 rounded-full size-8' alt="" />
        )}
    </button>
    </>
  )
}

export default ThemeToggleBtn
