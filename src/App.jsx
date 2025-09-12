// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Image, Video, User, Mail } from "lucide-react";

export default function App() {
  const [category, setCategory] = useState("Artattack");
  const [lightbox, setLightbox] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const gallery = {
    Artattack: [
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/1.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/2.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/3.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/4.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/5.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/6.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/7.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/8.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/9.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/10.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/11.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/12.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/13.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/14.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/15.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/16.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/17.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/18.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/19.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/20.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/21.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/22.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/23.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/24.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/25.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/26.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/27.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/28.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/29.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/30.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/31.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/32.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/33.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/34.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/35.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/artattack/36.jpg"},
    ],
    Couple: [
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/1.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/2.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/3.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/4.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/5.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/6.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/7.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/8.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/9.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/10.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/11.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/12.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/13.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/14.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/15.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/16.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/17.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/18.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/19.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/20.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/21.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/22.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/23.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/24.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/25.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/26.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/27.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/28.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/29.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/couple/30.jpg"},
    ],
    Landscapes: [
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/1.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/2.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/3.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/4.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/5.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/6.JPG"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/7.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/8.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/9.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/10.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/11.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/12.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/13.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/14.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/15.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/16.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/17.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/18.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/19.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/20.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/21.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/22.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/23.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/24.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/25.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/26.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/27.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/28.jpeg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/29.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/30.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/31.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/32.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/33.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/34.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/35.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/36.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/37.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/38.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/landscape/39.jpg"},
    ],
    People: [
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/1.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/2.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/3.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/4.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/5.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/6.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/7.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/8.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/9.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/10.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/11.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/12.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/13.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/14.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/15.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/16.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/17.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/18.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/19.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/20.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/21.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/22.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/23.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/24.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/25.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/26.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/27.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/28.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/29.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/30.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/31.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/32.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/33.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/34.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/35.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/people/36.jpg"},
    ],
    "Film Photography": [
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/1.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/2.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/3.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/4.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/5.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/6.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/7.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/8.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/9.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/10.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/11.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/12.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/13.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/14.jpg"},
      { src: "https://apesconsole.github.io/apesconsole-assets/images/dark/15.jpg"},
    ],
  };

  const categories = Object.keys(gallery);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <header className="p-6 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">A</div>
          <h1 className="text-xl font-semibold tracking-wide">APE'S CONSOLE</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-base font-medium">
          {/* Gallery */} 
          <motion.a href="#gallery" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} > 
            <Image className="w-5 h-5" /> Gallery 
          </motion.a> 
          {/* Videos */} 
          <motion.a href="#videos" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }} > 
            <Video className="w-5 h-5" /> Videos 
          </motion.a> 
          {/* About */} 
          <motion.a href="#about" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} > 
            <User className="w-5 h-5" /> About 
          </motion.a> 
          {/* Contact */} 
          <motion.a href="#contact" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }} > 
            <Mail className="w-5 h-5" /> Contact 
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl flex flex-col w-48 p-4 md:hidden">
            {/* Gallery */} 
            <motion.a href="#gallery" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} > 
              <Image className="w-5 h-5" /> Gallery 
            </motion.a> 
            {/* Videos */} 
            <motion.a href="#videos" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }} > 
              <Video className="w-5 h-5" /> Videos 
            </motion.a> 
            {/* About */} 
            <motion.a href="#about" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} > 
              <User className="w-5 h-5" /> About 
            </motion.a> 
            {/* Contact */} 
            <motion.a href="#contact" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300" whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }} > 
              <Mail className="w-5 h-5" /> Contact 
            </motion.a>
          </div>
        )}
      </header>

      {/* Landing */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-6">
        <motion.img
          src="https://apesconsole.github.io/apesconsole-assets/images/cover.gif"
          alt="Featured painting"
          className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        />

        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mt-6 text-gray-900"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {/* Add heading text here if needed */}
        </motion.h2>
      </section>

      {/* Gallery */}
      <section id="gallery" className="p-10 scroll-mt-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <div className="text-sm text-gray-600">
            Showing: <span className="font-semibold">{category}</span>
          </div>
        </div>

        {/* Category buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm ${
                category === cat ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold" : "bg-white text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-min">
          {gallery[category].map((item, idx) => (
            <motion.figure
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                className="w-full h-full object-cover" 
              />
            </motion.figure>
          ))}
        </div>
      </section>


      {/* Lightbox modal */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-end p-2">
              <button
                className="text-gray-700 px-3 py-1"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full h-auto object-contain"
            />
            <div className="p-4">{lightbox.title}</div>
          </div>
        </div>
      )}

      {/* Video Previews */}
      <section id="videos" className="py-8 bg-gray-200 scroll-mt-20 text-gray-900">
        <div className="w-full md:px-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Video 1 */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://player.vimeo.com/video/138508241?h=d928510696"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Varanasi"
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Varanasi - Moksha</h3>
              <p className="text-base leading-relaxed">
                Situated on the banks of river Ganga, Varanasi is considered as the gateway to Moksha (The end of the cycle of birth, death and re-birth). Legend has it that if the dead is cremated on the ghats of the Ganga at Varanasi the soul attains Moksha. The city is theatric, not only culturally but also visually. It is almost a living & breathing museum.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://player.vimeo.com/video/210157647?h=940b6a723e"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Yosemite"
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Yosemite in Rain</h3>
              <p className="text-base leading-relaxed">
                With all my preconceived notion of Ansel's perspective of the Yosemite I arrived at Yosemite quite disappointed. The weather forecast broke my heart. I had made preparations for months in advance and traveled all across the continent to find Yosemite in Rain. Yet I went to the famous Tunnel View point and slowly parked my car in an empty parking lot deserted by other disappointed tourists. And just when I gave up all hope, Yosemite displayed itself with all its beauty.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* About */}
      <section id="about" className="p-10 bg-gray-100 scroll-mt-20 w-full text-gray-900">
        <div className="flex flex-col md:flex-row gap-8 items-stretch w-full px-6 md:px-20">
          
          {/* Left: Text */}
          <div className="md:w-2/5 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">About The Ape</h2>

            <p className="text-lg leading-relaxed mb-4">
              "What is Ape's Console ?" or "What does it mean ?"<br/>
              <strong>So here it goes :</strong> A very dear friend of mine coined the name Ape for me back in college and I fondly accepted not knowing that some day I would attribute it to my passion. Console came from the corner of a room I used to stay in and would spend hours together. It was almost meditating. 
              As an obvious outcome, these two phrases got together to name my work and call itself Ape's Console. I find it interesting and hope it would remain so for ever.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              <strong>STYLE OF WORK</strong><br/>
              I was pushed into photography by my friend/brother Agniva Chakraborty (https://www.agnivachakraborty.com), a brilliant photographer. Growing up in India had helped me with a taste for elaborate colors, customs, celebrations and specially Bollywood Cinema. I love watching beautifully choreographed songs/dance sequences which are very unique to our cinema and I do draw a lot of inspiration from them.
              Though my work consists of extensive photography of people in love, some of my location search expeditions have taken me to amazing landscapes which made things all the more interesting.
              In painting, I have mostly worked on portraiture. Recently I have been studying more detailed drawings, scaled to near exact photographs. I do colors at times but pen/pencil has been my all time favorite.  
              * I am thankful to all my friends who have helped me with the opportunity to experiment and honored me by sharing a few pieces of their time.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong>COLLABORATE</strong><br/>
              I live and work mostly out of Bangalore, India and would love to collaborate with like-minded enthusiasts or someone who would be interested to get photographed in creative concepts. Feel free to reach out.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-3/5 flex items-center justify-center">
            <img
              src="https://apesconsole.github.io/apesconsole-assets/images/ape.jpeg"
              alt="About Ape's Console"
              className="w-3/4 h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 scroll-mt-20 bg-gray-800 text-white relative">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className="flex justify-between items-start">
          {/* Left: Contact Details */}
          <div className="max-w-2xl flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <FaGoogle className="text-red-500 w-6 h-6" />
              <a href="mailto:apesconsole@gmail.com" className="hover:text-red-400">
                Collaborate / Questions / Get in touch
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <FaInstagram className="text-pink-500 w-6 h-6" />
              <a href="https://instagram.com/apesconsole" className="hover:text-pink-400">
                Commissions / Notifications / DM / Subscribe
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3 mt-2">
              <FaGithub className="text-gray-200 w-6 h-6" />
              <a href="https://github.com/apesconsole" className="hover:text-gray-400">
                Code / Collaborate / Experiment
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 mt-2">
              <FaLinkedin className="text-blue-500 w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/soumitra-nath-207a095a/"
                className="hover:text-blue-400"
              >
                Solve Enterprise Problems / Hire
              </a>
            </div>
          </div>

          {/* Right: Text Logo */}
          <div className="absolute inset-y-0 right-6 flex items-center">
            <span className="text-white font-bold text-2xl tracking-wide">
              APESCONSOLE
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-sm bg-gray-900 text-green-400 border-t border-gray-700 font-mono flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()} Ape's Console  
        </span>
        <span className="flex items-center gap-2">
          <span className="text-gray-400">[ generated by </span>
          <span className="text-purple-400">ChatGPT</span>
          <span className="text-gray-400">| powered by </span>
          <a
            href="https://github.com/apesconsole/apesconsole-website"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-400">GitHub</span>
          </a>
          <span className="text-gray-400">]</span>
        </span>
      </footer>
    </div>
  );
}
