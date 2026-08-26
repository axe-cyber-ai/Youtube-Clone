import React from 'react'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      {/* Primary Video Player Area */}
      <div className="flex-1">
        <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
            title="YouTube Video Player"
            allowFullScreen
          ></iframe>
        </div>
        
        <h1 className="text-xl font-bold text-gray-900 mt-4">
          React.js va Tailwind CSS yordamida to'liq YouTube Klon yaratish
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mt-3 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center">
              UZ
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Uzbek Web Dev</h4>
              <p className="text-xs text-gray-500">125K obunachi</p>
            </div>
            <button className="ml-4 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition cursor-pointer">
              Obuna bo'lish
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold transition cursor-pointer">
              👍 12.4K
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold transition cursor-pointer">
              ↪️ Ulashish
            </button>
          </div>
        </div>

        {/* Video Description */}
        <div className="bg-gray-100 p-4 rounded-xl mt-4 text-sm text-gray-800">
          <p className="font-semibold mb-1">124,532 ko'rishlar • 2 kun oldin</p>
          <p>
            Ushbu darsda React 18, React Router v6 va Tailwind CSS yordamida zamonaviy YouTube web klonini yaratamiz. 
            Loyiha to'liq moslashuvchan (responsive) va barcha qurilmalar uchun qulay dizaynga ega.
          </p>
        </div>
      </div>

      {/* Suggested Videos Sidebar */}
      <div className="w-full lg:w-80 shrink-0 space-y-4">
        <h3 className="font-bold text-gray-900">Tavsiya etiladigan videolar</h3>
        {[1, 2, 3, 4].map((item) => (
          <Link key={item} to="/" className="flex gap-3 group">
            <div className="w-40 aspect-video bg-gray-300 rounded-lg overflow-hidden shrink-0">
              <img
                src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&q=80`}
                alt="Recommended Video"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition">
                JavaScript Bo'yicha Boshlang'ich Darslar #{item}
              </h4>
              <p className="text-[11px] text-gray-600 mt-1">IT Live Studio</p>
              <p className="text-[10px] text-gray-500">28K ko'rildi • 4 kun oldin</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Video
