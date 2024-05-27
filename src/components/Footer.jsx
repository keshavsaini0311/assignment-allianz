/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaTwitter ,FaLinkedinIn} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4  bottom-0 w-full  ">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Unfluke. All rights reserved.
      </div>
      <div className="flex justify-center p-3 gap-3">
        <a
          href="https://twitter.com/keshav_saini_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="mx-2 hover:underline" />
        </a>
        <a
          href="https://www.linkedin.com/in/keshav-saini-190a53256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={30} className="mx-2 hover:underline" />
        </a>
        <a href="#" className='hover:underline'> Terms and Conditions</a>
        <a href="#" className='hover:underline'> Refund Policy</a>
        <a href="#" className='hover:underline'> Privacy Policy</a>
      </div>
    </footer>
  )
}
