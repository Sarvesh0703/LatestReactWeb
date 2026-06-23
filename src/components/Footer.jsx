import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = ({theme}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40'>
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className='w-32 sm:w-44' />
            <p className='max-w-md'>
              From strategy to design and development, we help you build digital products that your customers will love.
            </p>
            <ul className='gap-8 flex flex-col md:flex-row'>
                <li><a className='hover:text-blue-500 dark:hover:text-blue-400' href="#hero">Home</a></li>
                <li><a className='hover:text-blue-500 dark:hover:text-blue-400' href="#about">About</a></li>
                <li><a className='hover:text-blue-500 dark:hover:text-blue-400' href="#services">Services</a></li>
                <li><a className='hover:text-blue-500 dark:hover:text-blue-400' href="#our-work">Our Work</a></li>
                <li><a className='hover:text-blue-500 dark:hover:text-blue-400' href="#contact-us">Contact Us</a></li>
            </ul>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className='text-gray-600 dark:text-gray-500'>
            <h3 className='font-semibold'>Subscribe to our newsletter</h3>
            <p className='text-sm mt-2 mb-6'>The latest news,
                articles, and resources, sent to your inbox weekly.
            </p>
            <div className='flex gap-2 text-sm'>
                <input type="email" placeholder="Enter your email"
                className='w-full p-3 pl-3 text-sm outline-none rounded-full dark:text-gray-200 bg-transparent
                border border-gray-300 dark:border-gray-500' />
                <button className='custom-btn-2 text-white rounded-full px-6'>Subscribe</button>
            </div>
        </motion.div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      <motion.div
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      className='flex justify-center sm:justify-between pb-6 text-sm text-gray-500 gap-4 flex-wrap'>
        <p className='text-center'>Copyright 2026 © Your Company. All rights reserved.</p>
        <div className='flex gap-4 items-center justify-between cursor-pointer'>
            <img src={assets.facebook_icon} alt="" style={{ width: '20px' }} className='hover:scale-110 transition duration-300 cursor-pointer' />
            <img src={assets.twitter_icon} alt="" style={{ width: '19px' }} className='hover:scale-110 transition duration-300 cursor-pointer' />
            <img src={assets.instagram_icon} alt="" style={{ width: '19px' }} className='hover:scale-110 transition duration-300 cursor-pointer' />
            <img src={assets.linkedin_icon} alt="" style={{ width: '19px' }} className='hover:scale-110 transition duration-300 cursor-pointer' />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
