import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-primary-500 text-white py-12 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0'>
          <div className='flex flex-col md:flex-row md:items-center gap-8 text-base md:text-lg'>
            <div className='flex items-center gap-3'>
              <MdLocationPin size={24} className='text-white' />
              <p>X6W2+C3, Masaka, Kigali, Rwanda</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt size={20} className='text-white' />
              <p>(250) 788998999</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope size={20} className='text-white' />
              <p>Web Mail</p>
            </div>
          </div>

          <div className='flex items-center gap-6 text-2xl'>
            <a href="#" className='hover:text-gray-200'><FaYoutube /></a>
            <a href="#" className='hover:text-gray-200'><FaInstagram /></a>
            <a href="#" className='hover:text-gray-200'><FaFacebook /></a>
            <a href="#" className='hover:text-gray-200'><FaTwitter /></a>
          </div>
        </div>

        <hr className='border-gray-400 my-6' />

        <div className='text-center text-base'>
          <p>© 2025 The Potter's Hand Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
