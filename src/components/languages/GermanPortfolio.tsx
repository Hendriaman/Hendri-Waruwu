import Image from "next/image";

export default function GermanPortfolio() {
  return (
    <main className="max-w-4xl mx-auto flex flex-col gap-16 items-center sm:items-start pt-24">
      <div id="introduction" className="text-center sm:text-left space-y-6 backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Hendriaman Waruwu</h1>
        <h2 className="text-4xl text-gray-700 dark:text-gray-300 font-semibold">Preisgekrönter Kameramann & Kreativer Videoeditor</h2>
        <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium">Verwandlung von Visionen in Kinematische Kunst</p>
      </div>

      <div id="about" className="max-w-2xl w-full transform hover:scale-105 transition-all duration-300">
      <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Über Mich</h3>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
          Als visionärer Kameramann und erfahrener Videoeditor mit einem Hintergrund in Informationstechnologie von einer führenden Universität in West-Jakarta verbinde ich modernste Technologie mit künstlerischem Storytelling. Mit über 3 Jahren transformativer Erfahrung beherrsche ich nicht nur branchenführende Tools wie Adobe Premiere Pro und After Effects, sondern innoviere auch damit, um fesselnde visuelle Narrative zu schaffen, die bleibenden Eindruck hinterlassen. Meine Expertise umfasst fortgeschrittene kinematografische Techniken, professionelles Farbgrading und fortschrittliche Audiobearbeitung, die es mir ermöglichen, kinoqualitative Ergebnisse für die anspruchsvollsten Projekte zu liefern. Jeder Auftrag wird zur Leinwand, um kreative Grenzen zu verschieben, während technische Exzellenz gewahrt bleibt.
        </p>
      </div>

      <div id="skills" className="flex flex-col gap-8 items-center sm:items-start bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl w-full max-w-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Fähigkeiten</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-gray-700/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Image src="/adobe_premiere_pro_icon.png" alt="Adobe Premiere Pro" width={32} height={32} className="animate-bounce" />
            Adobe Premiere
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-gray-700/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Image src="/adobe_after_effects_icon.png" alt="Adobe After Effects" width={32} height={32} className="animate-bounce" />
            After Effects
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-gray-700/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Image src="/cinematography_icon.png" alt="Kinematografie" width={32} height={32} className="animate-bounce" />
            Kinematografie
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-gray-700/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Image src="/color_correction_icon.png" alt="Farbkorrektur" width={32} height={32} className="animate-bounce" />
            Farbkorrektur
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-gray-700/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <Image src="/audio_processing_icon.png" alt="Audiobearbeitung" width={32} height={32} className="animate-bounce" />
            Audiobearbeitung
          </li>
        </ul>
      </div>

      <div id="contact" className="flex flex-col gap-8 items-center sm:items-start bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl w-full max-w-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all duration-300">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Soziale Medien</h3>
        <div className="flex flex-col gap-4 w-full">
          <a href="https://instagram.com/hendriaman47" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-xl hover:bg-blue-100/50 dark:hover:bg-gray-700/50 transition-all transform hover:scale-105 bg-white/30 dark:bg-gray-700/30 shadow-lg group">
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span className="text-xl text-gray-700 dark:text-gray-300 font-medium group-hover:text-pink-600 transition-colors">Instagram @hendriaman47</span>
          </a>
          <a href="https://facebook.com/Hendri w" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-xl hover:bg-blue-100/50 dark:hover:bg-gray-700/50 transition-all transform hover:scale-105 bg-white/30 dark:bg-gray-700/30 shadow-lg group">
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="text-xl text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 transition-colors">Facebook Hendri w</span>
          </a>
          <a href="tel:+6281262008144" className="flex items-center gap-4 p-6 rounded-xl hover:bg-blue-100/50 dark:hover:bg-gray-700/50 transition-all transform hover:scale-105 bg-white/30 dark:bg-gray-700/30 shadow-lg group">
            <svg className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span className="text-xl text-gray-700 dark:text-gray-300 font-medium group-hover:text-green-600 transition-colors">Telefon: +6281262008144</span>
          </a>
        </div>
      </div>
    </main>
  );
}