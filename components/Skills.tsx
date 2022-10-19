import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType} from '../typings'

type Props = {
  skills: SkillType[]
};

const Skills = ({ skills  }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col 
    text-center md:text-left xl:flex-row z-0
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px]  text-gray-500 text-xs md:text-sm">
        {" "}
        CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-7 md:gap-5 gap-4 mt-28 xl:mt-24 overflow-hidden  "
      >
        {skills.map((skill, index) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
