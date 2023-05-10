import { useState } from "react";
import ImgBartProfile from "../assets/img/bart-profile.jpg";
import LogoReact from "../assets/img/logo512.png";

import { iconHome, iconMessage, iconNotification, iconSearch } from "./Icons";

type Link = {
  id: number;
  href: string;
  label: string;
  icon: JSX.Element;
};

export default function Header() {
  const links: Link[] = [
    { id: 0, href: "/", label: "Home", icon: iconHome },
    { id: 1, href: "/messages", label: "Mensagens", icon: iconMessage },
    {
      id: 2,
      href: "/notifications",
      label: "Notificações",
      icon: iconNotification,
    },
  ];

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className="bg-gray-900 flex justify-center text-xs text-gray-300 backdrop-blur-md fixed py-3 px-4 w-full md:py-2">
      <nav className="flex justify-between items-center w-full max-w-6xl">
        <div className="flex items-center justify-center gap-3">
          <a href="/">
            <img className="max-w-[40px]" src={LogoReact} alt="Logo" />
          </a>
          <div className="relative flex items-center z-10">
            <label className="sr-only" htmlFor="search">
              Pesquisar
            </label>
            <span className="absolute left-2">{iconSearch}</span>
            <input
              className="py-2 pl-9 w-32 focus:w-64 pr-3 text-sm bg-gray-800 rounded-full focus:outline-none focus:border-2 focus:border-blue-500 focus:bg-gray-900 transition-colors duration-200 sm:w-64 lg:w-72 lg:focus:w-72"
              type="text"
              name="search"
              id="search"
            />
          </div>
        </div>

        <div
          onClick={() => setMenu(!menu)}
          className="space-y-1 cursor-pointer md:hidden"
        >
          <div
            className={`w-6 h-0.5 bg-emerald-400 duration-300 
              ${menu ? "rotate-45 -translate-x-0 translate-y-1" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-emerald-400 duration-300 
              ${menu ? "hidden" : ""}`}
          ></div>
          <div
            className={`h-0.5 float-right bg-emerald-400 duration-300 
              ${
                menu ? "w-6 -rotate-45 -translate-x-0 -translate-y-0.5" : "w-3"
              }`}
          ></div>
        </div>

        <ul
          className={`z-10 transition-all ease-in duration-300 px-2 py-4 left-0 absolute w-full
            bg-gray-900 flex justify-evenly items-center gap-2 md:py-0 md:flex-row md:gap-0 md:static md:opacity-100 md:w-auto md:bg-transparent md:space-x-4
            ${menu ? "top-16 opacity-100" : "top-[-400px] opacity-0"}`}
        >
          {links.map((link: Link) => (
            <li key={link.id} className="group hover:text-white md:w-20">
              <a
                className="flex items-center gap-1 md:flex-col"
                href={link.href}
              >
                {link.icon}
                <span className="hidden md:block">{link.label}</span>
              </a>
            </li>
          ))}
          <li className="hover:text-white md:w-20">
            <a className="flex flex-col items-center gap-1" href="/profile">
              <img
                className="w-8 h-7 rounded-full"
                src={ImgBartProfile}
                alt="Profile"
              />
              <span className="hidden md:block">Perfil</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
