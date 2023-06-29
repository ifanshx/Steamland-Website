import Image from "next/image";
import React from "react";

function Header() {
  return (
    <nav className="flex absolute top-0 px-8 pt-4 z-20 justify-between w-[1280px] xl:w-full items-center p-4">
      <div className="flex items-center space-x-[15px]">
        <Image
          src="/assets/icon/Profile.png"
          alt="Profile"
          width={80}
          height={80}
        />

        <div className="relative">
          <Image
            src="/assets/icon/Text.png"
            alt="Bubble-Chat"
            width={250}
            height={70}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-xl">
            Hi, GM
          </div>
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
          width={110}
          height={70}
          className="hover:scale-110 transition-transform cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Header;
