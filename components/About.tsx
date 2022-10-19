import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
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
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-10"
      />

      <div className="md:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold mb-5 md:mb-0">
          Here is a{" "}
          <span className="underline decoration-red-400/50">little</span>{" "}
          background
        </h4>
        <p className="md:text-base text-sm">
          {pageInfo?.backgroundInformation}
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tempora sit a illum aperiam similique laborum quaerat eaque commodi
          suscipit repellendus blanditiis minus veniam numquam id nemo
          consequuntur facilis laudantium, et nulla pariatur eius illo
          praesentium quam. Odio nostrum, minus aliquam, dolorem veniam porro
          dicta sit harum ipsam magnam quae animi vero doloremque impedit
          aliquid vitae error? Quos facere, quasi possimus asperiores sed dicta
          sit harum ipsam magnam quae animi vero doloremque impedit aliquid
          vitae error? Quos facere, quasi possimus asperiores sed */}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
