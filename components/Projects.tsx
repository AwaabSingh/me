import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "../sanity";
import { Project, Technology } from "../typings";

type Props = {
  projects: Project[]
};

const Projects = ({ projects }: Props) => {
  
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0  "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-red-400/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={urlFor(project?.image).url()}
              alt=""
              className="md:h-[20rem] mb-5"
            />

            <div className="space-y-8 px-0 md:px-10 max-w-6xl">
              <div className="flex justify-evenly items-center">
                <h4 className="text-xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-red-400/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>
              </div>
              <div className="flex items-center justify-center space-x-2  ">
                {project.technologies.map((technology) => (
                  <img
                    className="h-6 w-6 md:h-10 md:w-10"
                    src={urlFor(technology?.image).url()}
                    alt={technology.title}
                    key={technology._id}
                  />
                ))}
              </div>
              <p className="text-sm md:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
            <a
              className="bg-red-400/40 px-10 py-3 rounded-lg cursor-pointer font-bold text-gray-400 hover:bg-red-500/40 hover:text-gray-300"
              href={project.linkToBuild}
              target="_black"
            >
              Visit Build
            </a>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
