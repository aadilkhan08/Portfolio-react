import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
function Footer () {
  return (
    <div className='p-5 md:p-0 mt-12 text-white/70 max-w-[1000px] py-8 container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Aadil Khan</h1>
          <div className='flex space-x-6 mt-4'>
              <a target='helloji' href="https://www.linkedin.com/in/aadil-khan-5461a1251/" className='hover:text-gray-300'>
                  <FaLinkedin size={24} />
              </a>
              <a target='helloji' href="https://www.instagram.com/maiaadilhoon/profilecard/?igsh=MWVoMGZ2YXN3a2s5dg==" className='hover:text-gray-300'>
                  <FaInstagram size={24} />
              </a>
              <a target='helloji' href="https://github.com/aadilkhan08" className='hover:text-gray-300'>
                  <FaGithub size={24} />
              </a>
          </div>
    </div>
  )
}

export default Footer
