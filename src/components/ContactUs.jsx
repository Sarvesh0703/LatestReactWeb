import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const ContactUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
      lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Contact Us' desc='Get in touch with us today!' />
      <motion.form
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      className='grid grid-cols-1 gap-3 w-full max-w-2xl md:grid-cols-2'>
        <div>
            <p className="mb-2 text-sm font-medium">Your Name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300
            dark:border-gray-600'>
                <img src={assets.person_icon} alt="" />
                <input type="text" placeholder="Enter your name" className='w-full p-3 text-sm outline-none' required />
            </div>
        </div>

        <div className='mb-2'>
            <p className="mb-2 text-sm font-medium">Email Id</p>
            <div className='flex pl-3 rounded-lg border border-gray-300
            dark:border-gray-600'>
                <img src={assets.email_icon} alt="" />
                <input type="email" placeholder="Enter your email" className='w-full p-3 text-sm outline-none' required />
            </div>
        </div>

        <div className='sm:col-span-2'>
            <p className="mb-2 text-sm font-medium">Your Message</p>
            <textarea name="message" id="" rows={8} className='w-full p-3 text-sm outline-none
            rounded-lg border border-gray-300 dark:border-gray-600' placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit" className='custom-btn-2 w-max flex gap-2 bg-primary text-white
          text-sm px-6 py-2 rounded-full cursor-pointer transition-all'>
          Send Message <img src={assets.arrow_icon} alt="" className='w-4' />
        </button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs
