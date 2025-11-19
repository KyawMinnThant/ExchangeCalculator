"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoneyBillWave, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // ⭐ Get current path

  // Active link classes
  const activeClass =
    "text-green-600 font-semibold underline underline-offset-4";
  const normalClass = "text-gray-700 hover:text-green-600";

  return (
    <>
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center font-mono">
        {/* Left Title */}
        <Link
          href={"/"}
          className="flex items-center gap-2 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 drop-shadow-lg"
        >
          <FaMoneyBillWave className="text-green-400 drop-shadow" />
          WorldExchange
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link
            href="/convertcurrency"
            className={
              pathname === "/convertcurrency" ? activeClass : normalClass
            }
          >
            Convert
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? activeClass : normalClass}
          >
            About
          </Link>

          <Link
            href="/history"
            className={pathname === "/history" ? activeClass : normalClass}
          >
            History
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 
        ${
          sidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-end p-4">
          <button
            className="text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 px-6 pt-2 text-gray-700 font-mono">
          <Link
            href="/convertcurrency"
            className={`p-2 ${
              pathname === "/convertcurrency" ? activeClass : normalClass
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            Convert
          </Link>

          <Link
            href="/about"
            className={`p-2 ${
              pathname === "/about" ? activeClass : normalClass
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            About
          </Link>

          <Link
            href="/history"
            className={`p-2 ${
              pathname === "/history" ? activeClass : normalClass
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            History
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
