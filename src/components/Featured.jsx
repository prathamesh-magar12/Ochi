import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/case/fyde-partnership_deck/"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] bg-red-500">
            <div className="w-full h-full rounded-xl bg-green-400">
              <img className="w-full h-full bg-cover" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
