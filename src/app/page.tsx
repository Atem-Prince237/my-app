"use client"
import Image from "next/image";
import { useState } from "react";
import { FaBars } from 'react-icons/fa'; // Import the menu icon
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search logic here
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="relative bg-[url('/buss.jpeg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      {/* Search Bar and Menu Icon at the Top */}
      <div className="relative mx-auto max-w-screen-7xl px-4 py-8 flex items-center justify-center">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for bus trips..."
            className="rounded-lg border border-gray-300 px-6 py-4 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
          />
          <button
            type="submit"
            className="ml-2 rounded-lg bg-blue-500 px-6 py-4 text-white text-lg hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        <div className="ml-4 relative">
          <FaBars className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
              <Link href="/login">
                <a className="block px-20 py-2 text-gray-800 hover:bg-gray-200">Login</a>
              </Link>
              <Link href="/auth">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Auth</a>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="relative mx-auto max-w-screen-7xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          
          

        </div>
      </div>
    </section>
  );
}