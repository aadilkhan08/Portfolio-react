import React from 'react'
import { FaNode, FaJsSquare, FaReact, FaCss3Alt } from 'react-icons/fa'

const skills = [
  { icon: <FaJsSquare size={140} />, label: 'JavaScript' },
  { icon: <FaNode size={140} />, label: 'Node Js' },
  { icon: <FaReact size={140} />, label: 'React' },
  { icon: <FaCss3Alt size={140} />, label: 'CSS' }
]

function Skills () {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
      <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='md:h-[220px] md:w-[220px] h-[160px] w-[160px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'
            >
              {skill.icon}
              <p className='mt-2'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
