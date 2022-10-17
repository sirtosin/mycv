import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type FormValues = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formdata) => {
    window.location.href = `mailto:sirtosin45@gmail.com?subject=${formdata.subject}&body=Hi, my name is ${formdata.name}. ${formdata.message}.`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto items-center justify-evenly px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl capitalize font-semibold text-center">
          i have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50">lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+2348140680757</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">sirtosin45@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Lagos, Nigeria</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              type="text"
              {...register("name")}
              className="contact"
            />
            <input
              placeholder="Email"
              type="email"
              {...register("email")}
              className="contact"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="contact"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact"
          />
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
