import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../types'
import { urlFor } from '../sanity'
type Props = { 
  projects:Project[]
}

function Projects({ projects}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#FA7B0A]/80 scrollbar-thin">
        {/* projects  */}
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              src={urlFor(project?.image).url()}
              className="w-32 h-32 object-contain"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 uppercase">
                  case study {i + 1} of {projects.length}
                </span>
                : {project?.title}
              </h4>
              <div className='flex items-center justify-center space-x-2'>
                {project.technologies.map((tech) => (
                  <img key={tech._id} src={urlFor(tech?.image).url()} alt=""  className='rounded-full w-10 h-10 object-contain'/>
                ))}
              </div>
              
              <p className="text-lg text-center md:text-left capitalize font-light">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects