import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Left: Menu & Logo */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <div className="bg-red-600 text-white p-1 rounded-lg">
            <svg className="w-6 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tighter text-gray-900">YouTube</span>
          <span className="text-[10px] text-gray-500 font-semibold self-start mt-1">UZ</span>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-2xl mx-4 flex items-center justify-center">
        <div className="flex w-full max-w-lg items-center">
          <input
            type="text"
            placeholder="Qidiruv..."
            className="w-full h-10 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-sm"
          />
          <button className="h-10 px-6 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right: Actions & User */}
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer hidden md:flex">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer hidden md:flex">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold flex items-center justify-center text-sm cursor-pointer shadow">
          A
        </div>
      </div>
    </nav>
  )
}

export default Navbar
