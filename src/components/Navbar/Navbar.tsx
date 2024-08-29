"use client"
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-white">
    <div className="mx-auto max-w-screen-x px-100 sm:px-400 lg:px-20">
      <div className="flex h-20 items-center justify-between">
        <div className="md:flex md:items-center md:gap-8">
          <a className="block text-teal-100" href="#">
            <span className="sr-only">Home</span>
        
          </a>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a style={{ fontSize: '1.5rem' }} className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow  hover:text-blue-300" href="/"> Home </a>
              </li>
  
              <li>
                <a style={{ fontSize: '1.5rem' }} className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:text-blue-300" href="/pages/travel"> Destination</a>
              </li>
  
              <li>
                <a style={{ fontSize: '1.5rem' }} className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow  hover:text-blue-300" href="/pages/bookticket"> Booking </a>
              </li>
  
              <li>
                <a style={{ fontSize: '1.5rem' }} className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow  hover:text-blue-300" href="/pages/payment"> Payment </a>
              </li>
  
              <li>
                <a style={{ fontSize: '1.5rem' }}  className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow  hover:text-blue-300" href="/pages/about"> About us </a>
              </li>
  
              <li>
                <a style={{ fontSize: '1.5rem' }} className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:text-blue-300" href="#"> Contact us </a>

              </li>
              
            </ul>
          </nav>
        </div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className=" bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/pages/login"
            >
              Login
            </a>
  
            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                href="/pages/auth"
              >
                Register
              </a>
            </div>
          </div>
  
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
