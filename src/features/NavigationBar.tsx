"use client";
import NavigationProps from "@/interfaces/NavigationProps";
import { useState } from "react";

export default function NavigationBar() {
  const navigationItems: NavigationProps[] = [
    { name: "Home" },
    { name: "About Me" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-center py-4 px-4 max-w-screen-xl mx-auto">
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden sm:flex space-x-6">
          {navigationItems.map((items, key) => (
            <a
              key={key}
              href="#"
              className="font-normal tracking-wide relative group"
            >
              <span className="after:absolute after:bottom-[-3] after:left-0 after:h-[3px] after:rounded-2xl after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                {items.name}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {isOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 pb-4">
          {navigationItems.map((item, key) => (
            <a
              key={key}
              href="#"
              className="font-normal tracking-wide relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded-2xl after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
