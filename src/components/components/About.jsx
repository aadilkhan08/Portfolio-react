import React from 'react'
import aboutImg from '../../assets/profilepic.png'
import pc from '../../assets/pc.png'
import book from '../../assets/book.png'
import card from '../../assets/card.png'
import finance from '../../assets/finance.png'

function About () {
  return (
    <div className='text-white max-w-[1200px] mx-auto' id='about'>
      <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='px-5 md:px-0 grid md:grid-cols-8 gap-6 place-items-center'>
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <img src={book} alt='book' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-lg text-white/70 mt-2'>
                I hold a degree in Computer Science and I am focusing on
                technologies like React, Next.js, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <img src={finance} alt='finance' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>
                Problem Solving
              </h2>
              <p className='text-lg text-white/70 mt-2'>
                I approach challenges with a logical/systematic mindset
              </p>
            </div>
          </div>
        </div>

        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <img src={card} alt='card' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-lg text-white/70 mt-2'>
                I have diverse portfolio of projects
              </p>
            </div>
          </div>
        </div>

        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <img src={pc} alt='pc' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-4'>
              <h2 className='text-2xl font-bold text-white/80'>
                Technical Skills
              </h2>
              <p className='text-lg text-white/70 mt-2'>
                A Fullstack Web Developer, I specialize in React JS, Next JS,
                Node Js, Express, Mongo DB, GoogleOuth, Tailwind CSS...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
