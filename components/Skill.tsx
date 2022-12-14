import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer justify-center items-center">
      <motion.img
        
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter
        group-hover:grayscale transition duration-200 ease-in-out
        "
      />

      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 rounded-full xl:w-32 xl:h-32 z-10 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Skill;
