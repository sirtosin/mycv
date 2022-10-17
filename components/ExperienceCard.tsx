import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '../types';
import { urlFor } from '../sanity';

type Props = {
  item:Experience
}

function ExperienceCard({item}: Props) {
  return (
    <article key={item._id} className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(item?.companyImage).url()}
        alt=""
        className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{item.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">papafam</p>
        <div className="flex space-x-2 my-2 items-center">
          {item.technologies.map((tech) => (
            <img
              className="rounded-full  h-10 w-10"
              src={urlFor(tech?.image).url()}
              alt=""
            />
          ))}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300 font-bold">
          {new Date(item.dateStarted).toDateString()} -{" "}
          {item.isCurrentlyWorkingHere
            ? "Present"
            : new Date(item.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          {item.points.map((point, i) => (
            <li key={i} className='capitalize font-light'>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard
