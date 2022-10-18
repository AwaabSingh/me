import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:adeoyin2828@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[100rem] px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col md:space-y-10 space-y-5">
        <h4 className="text-xl md:text-4xl font-semibold text-center ">
          I have got just what you need.{" "}
          <span className="decoration-red-400/50 underline">Let&#39;s Talk</span>
        </h4>

        <div className="md:space-y-6 space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-red-400 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl ">+234 907 273 9445</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-red-400 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl ">adeoyin2828@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-red-400 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl ">Abuja, Nigeria</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex w-fit flex-col md:space-x-2 space-y-2 md:space-y-0 md:flex-row">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input 
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message "
            className="contactInput"
          />
          <button className="bg-red-400 py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
