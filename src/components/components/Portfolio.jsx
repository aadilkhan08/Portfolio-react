import React from 'react'
import { motion } from 'framer-motion'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import { FaLink, FaGithub } from 'react-icons/fa'
import project4 from '../../assets/cur.png'

const projects = [
  {
    title: 'Todos',
    description:
      'A responsive React Todo app with CRUD features, smooth animations, modern UI styling using TailwindCSS, and local storage persistence.',
    devStack: 'ReatJs, Context Api and TailwindCSS',
    Link: 'https://todos-context-api.vercel.app',
    Git: 'https://github.com/aadilkhan08/Todos-Context-Api.git',
    src: project1
  },
  {
    title: 'Dynamic Routing',
    description:
      'A responsive React app with dynamic routing, smooth animations, nested routes, modern TailwindCSS styling, and API Handling.',
    devStack: 'ReatJs, React router and TailwindCSS',
    Link: 'https://react-roter-project.vercel.app/',
    Git: 'https://github.com/aadilkhan08/React-Roter-Project.git',
    src: project3
  },
  {
    title: 'Theme Changer',
    description:
      'A responsive React app with theme toggling, smooth animations, modern UI styling using TailwindCSS, and local storage persistence.',
    devStack: 'ReatJs, Context Api and TailwindCSS',
    Link: 'https://theme-changer-five.vercel.app/',
    Git: 'https://github.com/aadilkhan08/Theme-Changer',
    src: project2
  },
  {
    title: 'Currency Converter',
    description:
      'A React-based Currency Converter leveraging custom hooks for efficient state management, offering real-time exchange rates with a clean, responsive UI.',
    devStack: 'ReatJs, React Hooks and TailwindCSS',
    Link: 'https://currency-conversion-sooty.vercel.app/',
    Git: 'https://github.com/aadilkhan08/Currency-conversion.git',
    src: project4
  }
]

function Portfolio () {
  return (
    <div
      className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52'
      id='portfolio'
    >
      <h1 className='text-white text-center text-6xl w-[320px] mx-auto font-semibold my-12'>
        Selected <span className='text-orange-400'>Project</span>
      </h1>

      <div className='max-w-[1000px] mt-40 mx-auto space-y-24 p-3 md:p-0'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={` mt-12 flex flex-col ${
              index % 2 === 1
                ? 'md:flex-row-reverse gap-12'
                : 'md:flex-row gap-12'
            }`}
          >
            <div className='space-y-2 max-w-[550px]'>
              <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl'>{project.title}</h2>
              <p className='text-lg text-white/70 break-words p-4'>
                {project.description}
              </p>
              <p className='text-xl text-orange-500 font-semibold'>
                {project.devStack}
              </p>

              <div className='w-64 flex h-[1px] bg-gray-400 my-4 '>
                <a target='hello' href={project.Link} className='mr-6 mt-2'>
                  <FaLink size={22} />
                </a>
                <a target='hello' href={project.Git} className='mt-2'>
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            <div className='flex justify-center item-center'>
              <a target='_blank' href={project.Link}>
              <img
                src={project.src}
                alt={project.title}
                className='h-[350px] w-[500px] object-cover border rounded border-gray-500'
              />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
