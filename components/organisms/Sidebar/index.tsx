import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Image from "next/image";

interface SidebarProps {
  activeMenu: "/" | "index2";
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="flex flex-col justify-between bg-gray-800 lg:h-screen lg:fixed w-full lg:w-1/6 shadow-xl">
      <div className="flex justify-between p-4 border-b border-gray-700">
        <div className="text-lg text-white font-medium flex items-center lg:justify-between w-full">
          <div>
            <span className="font-bold md:text-sm">JNE Express</span>
          </div>
          <span className="text-sm inline-flex justify-center items-center ml-2">
            <div className="mr-1 w-4 h-4 relative">
              <Image
                src="/icon/menuItem/user.svg"
                layout="fill"
                objectFit="contain"
                alt="user-icon"
              />
            </div>
            Rizky Darmawan
          </span>
        </div>
        {/* OnClick set state */}
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="block lg:hidden focus:outline-none text-white"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* jika isMobile adalah true buat menjadi hidden, jika false buat menjadi block */}
            <path
              className={isMobile ? "hidden" : "block"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            {/* jika isMobile adalah false buat menjadi hidden, jika true buat menjadi block */}
            <path
              className={!isMobile ? "hidden" : "block"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        className={`lg:block overflow-y-auto lg:h-full p-4 leading-relaxed ${
          isMobile ? "block" : "hidden"
        }`}
      >
        {/* Menu Item */}
        <MenuItem
          icon="home"
          title="Home"
          href="/"
          active={activeMenu === "/"}
        />
      </div>
    </div>
  );
}
