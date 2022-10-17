import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../types";
import { urlFor } from "../sanity";

type Props = {
  pageInfo:PageInfo
};

function About({pageInfo}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam
          consequatur error amet necessitatibus tenetur tempora, placeat itaque,
          ratione fugit perspiciatis molestiae eveniet vel! Vero aut nesciunt
          mollitia ab quas.
        </p>
      </div>
    </div>
  );
}

export default About;
