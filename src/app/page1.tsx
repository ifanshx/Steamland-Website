"use client";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/assets/background/Pagi.png",
    "/assets/background/Malam.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000); // 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between xl:w-full">
        <div className="flex relative w-[1280px] h-screen xl:w-full">
          <div className="flex absolute w-screen h-screen">
            <img
              src={images[imageIndex]}
              alt="Background Image"
              className="absolute w-screen h-screen"
            />
            <img
              src="/assets/background/Citadel.png"
              alt="Citadel"
              className=" w-screen h-screen  z-10 "
            />
          </div>
          <div className="flex relative">
            <img
              src="/assets/object/Plane1.png"
              alt="Your Image"
              className="fixed animate-ship1 z-99 h-[100px] top-[300px] left-[70%] bg-no-repeat"
            />
            <img
              src="/assets/object/Sphinx-island.png"
              alt="Sphinx-island"
              className="fixed z-20 animate-sphinxisland h-[160px] top-[462px] left-[70rem] bg-no-repeat"
            />
            <img
              src="/assets/object/Machine-Island.png"
              alt="Machine-Island"
              className="fixed z-20 animate-sphinxisland h-[160px] top-[462px] left-[70rem] bg-no-repeat"
            />
            <img
              src="/assets/object/Gallery.png"
              alt="Your Image"
              className="fixed z-20 w-[270px] h-[186px] top-[299px] left-[60px] hover:drop-shadow-3xl"
            />
          </div>
        </div>
      </main>
    </>
  );
}
