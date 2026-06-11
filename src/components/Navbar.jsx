import React, {useState} from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24
    xl:px-40 sticky top-0 z-20 backdrop-blur-xl bg-white/50 font-medium dark:bg-gray-900/70 border-b border-[#d1d5dc] dark:border-[#4a5565]'>
      <a href="#"><img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo"
      className='w-32 sm:w-44' /></a>

      <div className={`text-gray-800 sm:text-sm ${!sidebarOpen ?
      'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
      max-sm:h-full max-sm:flex-col max-sm:bg-white
      max-sm:pt-20 flex sm:items-center transition-all`}>

        <img src={assets.close_icon} alt="" onClick={()=> setSidebarOpen(false)} className='w-5 absolute right-4
        top-4 sm:hidden' />

        <a onClick={()=>setSidebarOpen(false)} href="#" className='md:text-gray-500 dark:md:text-gray-400 text-sm px-4 py-4 hover:text-blue-500 dark:hover:text-blue-400 nav_links'>Home</a>
        <a onClick={()=>setSidebarOpen(false)} href="#our-teams" className='md:text-gray-500 dark:md:text-gray-400 text-sm px-4 py-4 hover:text-blue-500 dark:hover:text-blue-400 nav_links'>Our Teams</a>
        <a onClick={()=>setSidebarOpen(false)} href="#services" className='md:text-gray-500 dark:md:text-gray-400 text-sm px-4 py-4 hover:text-blue-500 dark:hover:text-blue-400 nav_links'>Services</a>
        <a onClick={()=>setSidebarOpen(false)} href="#our-work" className='md:text-gray-500 dark:md:text-gray-400 text-sm px-4 py-4 hover:text-blue-500 dark:hover:text-blue-400 nav_links'>Our Work</a>
        <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='md:text-gray-500 dark:md:text-gray-400 text-sm px-4 py-4 hover:text-blue-500 dark:hover:text-blue-400 nav_links'>Contact Us</a>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setSidebarOpen(true)}
        className='w-8 sm:hidden' />

        <a href="#contact-us" className='custom-btn text-sm max-sm:hidden flex
        items-center gap-2 text-white px-6 py-2 rounded-full
        cursor-pointer transition-all'>Contact Us
            <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar
