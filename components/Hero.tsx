import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../types";
import BackgroundCircles from "./backgroundCircles";
type Props = {
  pageInfo:PageInfo
};

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name is ${pageInfo?.name}`,
      "Coding is Fun",
      "Learning Never Stops",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        className="w-32 h-32 rounded-full relative mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 tracking-[15px] pb-2">
         {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobtn">about</button>
          </Link>
          <Link href="#experience">
            <button className="herobtn">experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobtn">skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobtn">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
