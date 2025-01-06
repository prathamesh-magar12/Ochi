import React from "react";

const Eyes = () => {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-50 rounded-full">
            <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-950">
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-12">
                <div className="w-12 h-12 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-50 rounded-full">
            <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-950">
              <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-12">
                <div className="w-12 h-12 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
