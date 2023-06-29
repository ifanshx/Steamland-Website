import React from "react";

export default function HomePages() {
  return (
    <main>
      <div className="relative w-[1280px] min-h-screen xl:w-full justify-center items-center">
        <div className=" relative w-[1280px] min-h-screen xl:w-full justify-center items-center ">
          <img
            src="/assets/background/Malam.png"
            alt="Pagi"
            className="absolute z-10 xl:w-full left-0 bottom-0 w-full h-full object-cover object-left-bottom"
          />
          <img
            src="/assets/background/Citadel.png"
            alt="Citadel"
            className="absolute z-10 xl:w-full left-0 bottom-0 w-full h-full object-cover object-left-bottom"
          />
          <img
            src="/assets/object/Sphinx-Island.png"
            alt="Sphinx-island"
            className=" absolute z-20 drop-shadow-xl animate-sphinxisland h-[200px] top-[462px] left-[80rem] hover:drop-shadow-3xl cursor-pointer"
          />
          <img
            src="/assets/object/Machine-Island.png"
            alt="Machine-Island"
            className="absolute z-20 drop-shadow-xl animate-sphinxisland h-[200px] top-[280px] left-[67rem] hover:drop-shadow-3xl cursor-pointer"
          />
          <img
            src="/assets/object/Gallery.png"
            alt="Gallery"
            className="absolute  z-20 drop-shadow-xl w-[318px] h-[206px] top-[328px] left-[73px] hover:drop-shadow-3xl cursor-pointer"
          />
          <img
            src="/assets/object/Shop.png"
            alt="Shop"
            className="absolute z-20 drop-shadow-xl w-[220px] h-[187px] top-[502px] left-[520px] hover:drop-shadow-3xl cursor-pointer"
          />
        </div>
      </div>
    </main>
  );
}
