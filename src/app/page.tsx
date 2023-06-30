"use client";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import HomePages from "./pages/HomePages";

export default function Home() {
  const [shouldDisplayImage, setShouldDisplayImage] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setShouldDisplayImage(window.innerWidth < 1280);
    }

    // Tambahkan event listener untuk menangani perubahan ukuran layar
    window.addEventListener("resize", handleWindowResize);

    // Panggil fungsi handleWindowResize() saat komponen pertama kali dimuat
    handleWindowResize();

    // Clean up event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
     {shouldDisplayImage ? (
       <div className="min-h-screen justify-center items-center">
        <img  src="/assets/background/blur.jpg" alt="Blur" className="h-screen" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="flex text-3xl md:text-5xl lg:text-6xl">
            Mobile Responsive Coming Soon
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Peel City is too large to fit in screens narrower than 1280px for now.
          </p>
        </div>
       </div>
      ) : (
    <div>
      <Header />
      <HomePages />
      </div>
      )}
    </>
  );
}
