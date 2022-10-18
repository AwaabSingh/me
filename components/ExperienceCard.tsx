import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {

  return (
    <article
      className="flex flex-col rounded-lg items-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
     xl:w-[700px] snap-center bg-[#292929] py-16
     opacity-40 hover:opacity-100 cursor-pointer 
     transition-opacity duration-200 overflow-hidden 
     mt-28
     "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className=" md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-2xl mt-1 ">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-4">
          {experience.technologies.map((technology) => (
            <img
              className="md:h-10 md:w-10 h-6 w-6 rounded-full"
              src={urlFor(technology?.image).url()}
              alt={technology.title}
              key={technology._id}
            />
          ))}

          {/* Tech stack */}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 md:ml-5 md:text-lg h-48 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-red-400/80">
          {experience.points.map((point, i) => (
            <li key={i} className="flex  w-64 md:w-full">
               <span className="mr-1 text-red-400">#</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
