import Image from "next/image";

export default function EnglishPortfolio() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col gap-16 items-center sm:items-start pt-24">
      <div id="introduction" className="text-center sm:text-left space-y-6 backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 w-full max-w-6xl cursor-default border border-gray-100/50 dark:border-gray-700/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-8">
            <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient drop-shadow-lg hover:scale-105 transition-transform">
              亨德里亚曼·瓦鲁乌
            </h1>
            <h2 className="text-4xl text-gray-700 dark:text-gray-300 font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text hover:scale-105 transition-transform">
              获奖电影摄影师 & 创意视频编辑
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium italic hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              将愿景转化为电影杰作
            </p>
          </div>
          <Image 
            src="/profile.jpg" 
            alt="亨德里亚曼·瓦鲁乌" 
            height={500} 
            width={500} 
            className="drop-shadow-2xl transition-all duration-500 transform hover:scale-110 animate-float filter hover:brightness-110 hover:contrast-110"
            priority
            quality={100}
          />
        </div>
      </div>

      <div id="about" className="flex flex-col gap-8 items-center sm:items-start bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-10 shadow-2xl w-full max-w-2xl border border-gray-100/50 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-500">
      <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient cursor-default drop-shadow-lg hover:scale-110 transition-transform">关于我</h3>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 shadow-2xl border border-gray-100/50 dark:border-gray-700/50 cursor-pointer transform hover:scale-105 transition-all duration-500 hover:rotate-1 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
          作为一名具有远见的电影摄影师和精通视频编辑的专家，我拥有西雅加达一所知名大学的信息技术背景，完美地将尖端技术与艺术讲故事融为一体。在超过3年的变革性经验中，我不仅精通而且创新地使用了Adobe Premiere Pro和After Effects等行业领先工具，创造出令人惊叹的视觉叙事，留下持久的印象。我的专业知识涵盖了先进的电影技术、专业的调色和复杂的音频工程，使我能够为最具挑战性的项目提供卓越的电影级品质成果。每个任务都成为突破创意界限的画布，同时保持不妥协的技术卓越性。
        </p>
      </div>

      <div id="skills" className="flex flex-col gap-8 items-center sm:items-start bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl w-full max-w-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient cursor-default hover:scale-110 transition-transform">Skills</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 bg-gradient-to-r from-white/30 to-blue-100/30 dark:from-gray-700/30 dark:to-blue-900/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 cursor-pointer group animate-fade-in">
            <Image src="/adobe_premiere_pro_icon.png" alt="Adobe Premiere Pro" width={32} height={32} className="group-hover:animate-bounce transition-all" />
            <span className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Adobe Premiere</span>
          </li>
          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 bg-gradient-to-r from-white/30 to-purple-100/30 dark:from-gray-700/30 dark:to-purple-900/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 cursor-pointer group animate-fade-in">
            <Image src="/adobe_after_effects_icon.png" alt="Adobe After Effects" width={32} height={32} className="group-hover:animate-bounce transition-all" />
            <span className="font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">After Effects</span>
          </li>
          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 bg-gradient-to-r from-white/30 to-red-100/30 dark:from-gray-700/30 dark:to-red-900/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 cursor-pointer group animate-fade-in">
            <Image src="/cinematography_icon.png" alt="Cinemarography" width={32} height={32} className="group-hover:animate-bounce transition-all" />
            <span className="font-semibold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Cinematography</span>
          </li>
          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 bg-gradient-to-r from-white/30 to-green-100/30 dark:from-gray-700/30 dark:to-green-900/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 cursor-pointer group animate-fade-in">
            <Image src="/color_correction_icon.png" alt="Color Correction" width={32} height={32} className="group-hover:animate-bounce transition-all" />
            <span className="font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Color Correction</span>
          </li>
          <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 bg-gradient-to-r from-white/30 to-yellow-100/30 dark:from-gray-700/30 dark:to-yellow-900/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 cursor-pointer group animate-fade-in">
            <Image src="/audio_processing_icon.png" alt="Audio Processing" width={32} height={32} className="group-hover:animate-bounce transition-all" />
            <span className="font-semibold group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Audio Processing</span>
          </li>
        </ul>
      </div>

      <div id="contact" className="flex flex-col gap-8 items-center sm:items-start bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl w-full max-w-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient cursor-default hover:scale-110 transition-transform hover:animate-pulse">Contact Me</h3>
        <div className="flex flex-col gap-6 w-full">
          <a href="https://instagram.com/hendriaman47" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-xl hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-500/30 dark:hover:bg-gray-700/50 transition-all transform hover:scale-110 bg-white/30 dark:bg-gray-700/30 shadow-lg group animate-slide-in-left hover:shadow-pink-500/20">
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 transition-colors group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span className="text-xl text-gray-700 dark:text-gray-300 font-medium group-hover:text-pink-600 transition-colors group-hover:font-bold">@hendriaman47</span>
          </a>
          <a href="https://facebook.com/Hendri w" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-cyan-500/30 dark:hover:bg-gray-700/50 transition-all transform hover:scale-110 bg-white/30 dark:bg-gray-700/30 shadow-lg group animate-slide-in-right hover:shadow-blue-500/20">
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="text-xl text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 transition-colors group-hover:font-bold">Hendri w</span>
          </a>
          <a href="tel:+6281262008144" className="flex items-center gap-4 p-6 rounded-xl hover:bg-gradient-to-r hover:from-green-500/30 hover:to-emerald-500/30 dark:hover:bg-gray-700/50 transition-all transform hover:scale-110 bg-white/30 dark:bg-gray-700/30 shadow-lg group animate-slide-in-left hover:shadow-green-500/20">
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span className="text-xl text-gray-700 dark:text-gray-300 font-medium group-hover:text-green-600 transition-colors group-hover:font-bold">+62 812 6200 8144</span>
          </a>
        </div>
      </div>
    </main>
  );
}
