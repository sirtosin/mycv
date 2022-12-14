import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../types'
import { urlFor } from '../sanity'
type Props = {
  directionLeft?: boolean
  skill:Skill
}

function Skill({directionLeft,skill}: Props) {
  return (
    <div className="group cursor-pointer flex relative">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
              src={urlFor(skill?.image).url()}
              className='rounded-full border object-contain border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        alt=""
          />
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                  <p className='font-bold text-3xl text-black opacity-100 '>{skill.progress}%</p>
              </div>
          </div>
    </div>
  );
}

export default Skill
