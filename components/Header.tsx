import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from "framer-motion"
import Link from "next/link";
import { Social } from "../types";

type Props = {
  social:Social[]
};

function Header({social}: Props) {
  return (
    <header className="sticky top-0 p-5 max-w-7xl items-start mx-auto flex justify-between z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex items-center"
      >
        {social.map((item) => (
          <SocialIcon
            key={item._id}
            fgColor="gray"
            bgColor="transparent"
            url={item.url}
          />
        ))}
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
            x: 500,
          }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            fgColor="gray"
            className="cursor-pointer"
            bgColor="transparent"
            network="email"
            url="https://twitter.com/jaketrent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
