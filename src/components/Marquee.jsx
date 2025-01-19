import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-[5vw] bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden ">
      <div className="text border-t border-b border-zinc-400 gap-10 flex whitespace-nowrap">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="flex gap-10"
        >
          <h1 className="uppercase text-[18vw] leading-none tracking-tighter font-bold -mt-[3.5vw] -mb-[1vw] py-3">
            we are ping
          </h1>
          <h1 className="uppercase text-[18vw] leading-none tracking-tighter font-bold -mt-[3.5vw] -mb-[1vw] py-3">
            we are ping
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
