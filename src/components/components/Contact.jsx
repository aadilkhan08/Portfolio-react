import React from 'react'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'

function Contact () {
  return (
    <div
      className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8'
      id='contact'
    >
      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <img src={phone} alt='phone' className='h-[100px] w-auto mr-6' />
            <a href='tel:+918720809245' className='text-xl hover:underline'>
              +91 8720809245
            </a>
          </li>
          <li className='flex items-center'>
            <img src={mail} alt='mail' className='h-[100px] w-auto mr-6' />
            <a
              href="mailto:aadilmoid@gmail.com?subject=Let's%20Have%20a%20Talk&body=Hi%20Aadil,%20I%20would%20like%20to%20discuss..."
              className='text-xl hover:underline'
            >
              aadilmoid@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'>
          Let's connect
        </h2>
        <p className='text-white/70 mb-6'>
          Send me a message and lets schedule a call!
        </p>

        <form
          className='space-y-4'
          action='https://getform.io/f/bzyyggda'
          method='POST'
        >
          <div className='grid md:grid-cols-2 gap-4'>
            <input
              type='text'
              name='Firstname'
              className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
              placeholder='First name'
            />
            <input
              type='text'
              name='Lastname'
              className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
              placeholder='Last name'
            />
            <input
              type='email'
              name='Email'
              className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
              placeholder='Email'
            />
            <input
              type='phone'
              name='Phone'
              className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
              placeholder='Phone'
            />
          </div>
          <textarea
            className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'
            placeholder='Your message...'
          />
          <button className='animate-gradient-xy bg-gradient-to-r from-orange-700 to-orange-400 text-white px-6 py-2 w-full rounded-xl font-semibold text-xl'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
