import cursor from '../../assets/icon1.png'
import message from '../../assets/icon2.png'
import { motion } from 'framer-motion'
import profilepic from '../../assets/profilepic.png'
import React from 'react'

function Hero () {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
      <div
        className='absolute rounded-[50%] w-[3000px] h-[1300px]  top-[550px] left-[50%] -translate-x-1/2
            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]
      '
      ></div>

      <div className='relative'>
        <div className='text-8xl font-bold text-center'>
          <h1 className='text-[#98B4CE]'>Hi, I am</h1>
          <h1 className='text-[#E48A57]'>Aadil Khan</h1>
        </div>

        <motion.div
          className='md:block hidden absolute left-[280px] top-[170px]'
          drag
        >
          <img
            className=''
            draggable='false'
            height={170}
            width={170}
            src={cursor}
            alt='cursor'
          />
        </motion.div>

        <motion.div
          className='md:block hidden absolute right-[220px] top-[20px]'
          drag
        >
          <img
            className=''
            height={120}
            width={120}
            draggable='false'
            src={message}
            alt='cursor'
          />
        </motion.div>

        <p className='px-2 text-xl max-w-[500px] text-center mx-auto mt-8 text-white/80'>
          I am a full-stack developer dedicated to building websites that
          deliver exceptional user experiences.
        </p>

        <img
          src={profilepic}
          alt='profilepicture'
          className='h-auto w-auto mx-auto'
        />
      </div>
    </div>
  )
}

export default Hero
