import React, { useEffect, useLayoutEffect, useState } from "react";

export default function HomePages() {

  const [innerWidth, setInnerWidth] = useState('0px');
  
  var innerHeight = 0;

  useEffect(() => {
    setInnerWidth(window.innerWidth + "px");
    innerHeight = window.innerHeight;
  }, [])

  useLayoutEffect(() => { 
    window.addEventListener('resize', onResize) 
    return () => window.removeEventListener('resize', onResize) 
  }, []) 

  const onResize = (event: Event) => {
    // setOuterWidth(window.innerWidth + "px");
    setInnerWidth(window.innerWidth + "px");
  } 

  return (
    <main>
      <div className="relative min-h-screen justify-center items-center" style={{ width: innerWidth }}>
        <div className=" relative min-h-screen justify-center items-center " style={{ width: innerWidth }}>
          <img
            src="/assets/background/Malam.png"
            alt="Pagi"
            className="absolute z-10 w-full left-0 bottom-0 w-full h-full object-cover object-left-bottom"
          />
          <img
            src="/assets/background/Citadel.png"
            alt="Citadel"
            className="absolute z-10 w-full left-0 bottom-0 w-full h-full object-cover object-left-bottom"
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
            className="absolute z-20 drop-shadow-xl w-[21%] h-[26%] -translate-y-1/2 top-[55.5%] left-[4.5%] hover:drop-shadow-3xl cursor-pointer object-cover object-left-bottom"
          />
          <img
            src="/assets/object/Shop.png"
            alt="Shop"
            className="absolute z-20 drop-shadow-xl w-[15%] h-[25%] bottom-[11%] -translate-x-1/2 left-[41%] hover:drop-shadow-3xl cursor-pointer object-cover object-left-bottom"
          />
        </div>
      </div>
    </main>
  );
}
