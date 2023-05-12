import { useState } from "react";
import ImgBartProfile from "../assets/img/bart-profile.jpg";
import LogoReact from "../assets/img/logo512.png";

import {
  iconHome,
  iconMessage,
  iconNotification,
  iconSearch,
  iconDownArrow,
  iconUpArrow,
  iconSettings,
  iconProfile,
  iconLogout,
} from "./Icons";

type Link = {
  id: number;
  href: string;
  label: string;
  icon: JSX.Element;
};

export default function Header(): JSX.Element {
  /* variable that stores the links of the menu */
  const links: Link[] = [
    { id: 0, href: "/", label: "Feed", icon: iconHome },
    { id: 1, href: "/messages", label: "Mensagens", icon: iconMessage },
    {
      id: 2,
      href: "/notifications",
      label: "Notificações",
      icon: iconNotification,
    },
  ];

  /* Variable that stores the links of the profile menu */
  const linksProfile: Link[] = [
    { id: 0, href: "/profile", label: "Perfil", icon: iconProfile },
    { id: 1, href: "/settings", label: "Configurações", icon: iconSettings },
    { id: 2, href: "/logout", label: "Sair", icon: iconLogout },
  ];

  const [menu, setMenu] = useState<boolean>(false);
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const mobileMenu = window.innerWidth <= 1300;

  /* Function that toggles the menu */
  const handleMenu = () => {
    setMenu(!menu);
    setUserMenu(false);
  };

  /* Function that toggles the profile menu */
  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  /* Function that closes the menu when scrolling */
  const handleMenuScroll = () => {
    if (window.scrollY > 0) {
      setUserMenu(false);
      setMenu(false);
    }
  };

  window.addEventListener("scroll", handleMenuScroll);

  return (
    <header className="bg-gray-900 flex justify-center text-xs text-gray-300 z-10 fixed py-3 px-4 w-full md:py-2">
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
              className="py-2 pl-9 w-32 focus:w-64 pr-3 text-sm bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:border-2 focus:border-emerald-500 transition-colors duration-200 sm:w-64 lg:w-72 lg:focus:w-80"
              type="text"
              name="search"
              id="search"
            />
          </div>
        </div>

        <div
          onClick={handleMenu}
          className="space-y-1 cursor-pointer md:hidden"
        >
          <div
            className={`w-6 h-0.5 bg-emerald-600 duration-300 
              ${menu ? "rotate-45 -translate-x-0 translate-y-1" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-emerald-600 duration-300 
              ${menu ? "hidden" : ""}`}
          ></div>
          <div
            className={`h-0.5 float-right bg-emerald-600 duration-300 
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
            <li
              key={link.id}
              className="group flex justify-center hover:text-white duration-300 md:w-20"
            >
              <a
                className="flex items-center gap-1 md:flex-col"
                href={link.href}
              >
                <span className="text-gray-300 group-hover:text-white duration-300 w-6 h-6 md:w-5 md:h-5">
                  {link.icon}
                </span>
                <span className="hidden md:block">{link.label}</span>
              </a>
            </li>
          ))}
          <li className="duration-300 flex justify-center md:w-16">
            <button
              className="flex flex-col items-center gap-1"
              type="button"
              onClick={handleUserMenu}
            >
              <img
                className="w-8 h-7 rounded-full"
                src={ImgBartProfile}
                alt="Profile"
              />
              <span className="hidden md:block w-3 h-3">
                {userMenu ? iconUpArrow : iconDownArrow}
              </span>
            </button>
            <ul
              className={`absolute z-10 space-y-4 w-40 bg-gray-900 rounded-md shadow-md py-2 px-3 duration-300
              ${mobileMenu ? "right-0" : ""}
              ${userMenu ? "top-14 opacity-100" : "top-[-400px] opacity-0"}
            `}
            >
              {linksProfile.map((link: Link) => (
                <li className="hover:text-white duration-300" key={link.id}>
                  <a className="flex items-center gap-2" href={link.href}>
                    <span className="block w-6 h-6">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
