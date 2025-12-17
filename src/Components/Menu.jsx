import React from 'react'
import CardOne from './MenuCards/CardOne.jsx'
import CardTwo from './MenuCards/CardTwo.jsx'
import CardThree from './MenuCards/CardThree.jsx'
import { useState } from 'react'
import { X } from "lucide-react";


function Menu({ closeMenu }) {
  const [activeCard, setActiveCard] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`inset-0 z-40 bg-black/90 backdrop-blur-md overflow-y-auto`}>
      <div className='relative w-full min-h-screen flex flex-col items-center py-12 px-4 md:px-8'>
        <button className='top-4 left-4 z-50 hover:bg-amber-500/20 p-2 rounded-full active:scale-90 transition-all duration-300'
          onClick={closeMenu}>
          <X className='text-orange-100 hover:text-orange-300 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer active:rotate-90 hover:rotate-180' size={40} />
        </button>

        <div className="w-full max-w-7xl mt-10 mb-20">
          <div className={`${activeCard === 0 ? 'block' : 'hidden'}`}><CardOne /></div>
          <div className={`${activeCard === 1 ? 'block' : 'hidden'}`}><CardTwo /></div>
          <div className={`${activeCard === 2 ? 'block' : 'hidden'}`}><CardThree /></div>
        </div>

        <button className="group relative bottom-6 right-6 z-50 flex items-end justify-end text-xl px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-black font-bold tracking-wider uppercase hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] active:scale-95 border-2 border-amber-300"
          onClick={() => {
            if (activeCard < 2) {
              setActiveCard(activeCard + 1);
            }
            else {
              setActiveCard(0);
            }
          }}>
          <span className="flex items-center gap-2">
            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeWidth={2} d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            Next.
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>

  )
}

export default Menu
