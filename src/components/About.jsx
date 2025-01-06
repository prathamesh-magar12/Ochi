import React from "react";

const About = () => {
  return (
    <div className="w-full text-black p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum
        maxime fugit corporis at ratione
      </h1>

      <div className="w-full flex gap-5 border-t mt-20 pt-10 border-[#324d0e]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex items-center uppercase gap-10 px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-[#709901cd] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
