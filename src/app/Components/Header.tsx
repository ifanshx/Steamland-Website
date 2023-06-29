"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const texts = [
  "Hi, Gm Steamlanders",
  "Welcome to the flying city",
  "Pack your bags and head on a journey towards the flying city",
  "Get ready for the next chapter of steamland!",
];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(newIndex);
      setCurrentText(texts[newIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <nav className="flex absolute top-0 px-8 pt-4 z-20 justify-between w-[1280px] xl:w-full items-center p-4">
      <div className="flex items-center space-x-[105px]">
        <Image
          src="/assets/icon/Profile.png"
          alt="Profile"
          width={90}
          height={80}
        />

        <div className="absolute flex items-center bg-white rounded-[15px] py-[12px] px-[15px] shadow-md ml-2 border-[4px] border-[#5d4418]">
          <h1 className="text-sm font-Darker ">{currentText}</h1>
        </div>
      </div>
      <div className="flex space-x-[15px]">
        <Image
          src="/assets/icon/Tensor.png"
          alt="Tensor"
          width={70}
          height={70}
          className="hover:scale-110 transition-transform cursor-pointer"
        />
        <a
          href="https://magiceden.io/marketplace/steamland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/icon/Magic-Eden.png"
            alt="Magic-Eden"
            width={70}
            height={70}
            className="hover:scale-110 transition-transform cursor-pointer"
          />
        </a>
        <a
          href="https://twitter.com/SteamlandNFT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/icon/Twitter.png"
            alt="Twitter"
            width={70}
            height={70}
            className="hover:scale-110 transition-transform cursor-pointer"
          />
        </a>
        <a
          href="https://discord.gg/steamland-986654523806318622"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/icon/Discord.png"
            alt="Discord"
            width={70}
            height={70}
            className="hover:scale-110 transition-transform cursor-pointer"
          />
        </a>

        <Image
          src="/assets/icon/Connect.png"
          alt="Connect"
          width={120}
          height={90}
          className="hover:scale-110 transition-transform cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Header;
