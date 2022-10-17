import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard';
import { Experience } from '../types';
type Props = {
  experience:Experience[]
}

function WorkEexperience({experience}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FA7B0A]/80">
        {experience.map((item) => (
          <ExperienceCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default WorkEexperience
