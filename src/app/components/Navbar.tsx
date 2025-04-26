"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
            <Image
              src="globe.svg"
              alt="Logo"
              width={100}
              height={100}
              className="h-10 w-10 md:h-16 md:w-16"
            />
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => {
              return (
                <li className="hover:bg-gray-600 hover:border-1 px-3 py-1.5 rounded-full mix-blend-difference" key={link.title}>
                    <NavLink
                    title={link.title}
                    href={link.path}
                    />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </div>
    </nav>
  );
};

export default Navbar;