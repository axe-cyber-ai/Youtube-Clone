import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const mockVideos = [
  {
    id: '1',
    title: 'React.js va Tailwind CSS yordamida to\'liq YouTube Klon yaratish',
    channel: 'Uzbek Web Dev',
    views: '124K martta ko\'rildi',
    time: '2 kun oldin',
    duration: '24:15',
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
  {
    id: '2',
    title: 'JavaScript Asinxron Dasturlash va Async/Await master-klass',
    channel: 'Code Academy UZ',
    views: '45K martta ko\'rildi',
    time: '5 kun oldin',
    duration: '18:40',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: '3',
    title: 'Frontend Dasturchi Bo\'lish Uchun 2026-yilgi Yo\'l Xaritasi',
    channel: 'IT Live Studio',
    views: '89K martta ko\'rildi',
    time: '1 hafta oldin',
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    id: '4',
    title: 'Node.js va Express backend REST API loyihasini noldan qurish',
    channel: 'Backend Pro',
    views: '32K martta ko\'rildi',
    time: '2 hafta oldin',
    duration: '42:10',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: '5',
    title: 'Zamonaviy UI/UX Dizayn Sirlari va Figma Darslari',
    channel: 'Design Lab',
    views: '67K martta ko\'rildi',
    time: '3 hafta oldin',
    duration: '12:05',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&q=80',
  },
  {
    id: '6',
    title: 'Python Sun\'iy Intellekt va Neyron Tarmoqlar Kirish',
    channel: 'AI Master Class',
    views: '210K martta ko\'rildi',
    time: '1 oy oldin',
    duration: '35:50',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80',
  }
]

const categories = ['Barchasi', 'Dasturlash', 'Musiqa', 'O\'yinlar', 'Yangiliklar', 'Texnologiya', 'Filmlar', 'Dizayn']

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Barchasi')

  return (
    <div className="flex bg-gray-50 min-h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 p-3 hidden lg:block shrink-0">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-4 px-3 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg">
            <span>🏠</span> Bosh sahifa
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <span>⚡</span> Shorts
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <span>📺</span> Obunalar
          </button>
          <hr className="my-3 border-gray-200" />
          <div className="text-xs font-bold text-gray-500 uppercase px-3 mb-2">Kutubxona</div>
          <button className="w-full flex items-center gap-4 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <span>📁</span> Tarix
          </button>
          <button className="w-full flex items-center gap-4 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <span>👍</span> Yoqqan videolar
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 overflow-hidden">
        {/* Categories Bar */}
        <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar border-b border-gray-200 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockVideos.map((video) => (
            <Link key={video.id} to={`/video?id=${video.id}`} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-video mb-3 shadow-sm group-hover:shadow-md transition">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex gap-3">
                <img src={video.avatar} alt={video.channel} className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{video.channel}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {video.views} • {video.time}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
