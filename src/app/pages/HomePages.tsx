import React, { useEffect, useLayoutEffect, useState } from "react";

export default function HomePages() {

  const [screenWidth, setScreenWidth] = useState('0px');
  const [screenHeight, setScreenHeight] = useState('0px');

  useEffect(() => {
    setScreenWidth(window.innerWidth + "px");
    setScreenHeight(window.innerHeight + "px");
  }, [])

  useLayoutEffect(() => { 
    window.addEventListener('resize', onResize) 
    return () => window.removeEventListener('resize', onResize) 
  }, []) 

  const onResize = (event: Event) => {
    if(window.outerWidth < window.innerWidth){
      setScreenWidth(window.innerWidth + "px");
      setScreenHeight(window.innerHeight + "px");
    }
  } 

  return (
    <main>
      <div className="relative min-h-screen justify-center items-center">
        <div className=" relative min-h-screen justify-center items-center ">
  
          <div className="relative" style={{ width: screenWidth, height: screenHeight }}>
          <img
            src="/assets/background/Malam.png"
            alt="Pagi"
            className="absolute z-10 left-0 bottom-0 w-full h-full object-cover object-left-bottom"
          />
          <img
            src="/assets/background/Citadel.png"
            alt="Citadel"
            className="absolute z-10 left-0 bottom-0 w-full h-full"
          />
          <img
            src="/assets/object/Sphinx-Island.png"
            alt="Sphinx-island"
            className=" absolute z-20 drop-shadow-xl animate-sphinxisland h-[30%] top-[45%] right-[10%] hover:drop-shadow-3xl cursor-pointer"
          />
          <img
            src="/assets/object/Machine-Island.png"
            alt="Machine-Island"
            className="absolute z-20 drop-shadow-xl animate-sphinxisland h-[20%] top-[35%] right-[25%] hover:drop-shadow-3xl cursor-pointer"
          />
          <img
            src="/assets/object/Gallery.png"
            alt="Gallery"
            className="absolute z-20 drop-shadow-xl w-[21%] h-[26%] -translate-y-1/2 top-[55%] left-[4.5%] hover:drop-shadow-3xl cursor-pointer"
          />
          <img
            src="/assets/object/Shop.png"
            alt="Shop"
            className="absolute z-20 drop-shadow-xl w-[15.5%] h-[24%] bottom-[12%] -translate-x-1/2 left-[40.2%] hover:drop-shadow-3xl cursor-pointer"
          />
          </div>
        </div>
      </div>
    </main>
  );
}