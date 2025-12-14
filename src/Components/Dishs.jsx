import React from 'react'
import '../App.css'
import { motion } from 'motion/react'

function Dishs({ dishName, dishImage, dishPrice }) {
  return (
    <div className="items w-full md:w-[600px] h-auto md:h-72 flex flex-col md:flex-row flex-shrink-0 snap-start border-2 border-amber-200/50 p-4 gap-4 bg-white/10 backdrop-blur-sm rounded-xl">
      <img src={dishImage} alt={dishName} className='border-3 border-amber-500/60 rounded-2xl hover:scale-105 duration-300 w-full md:w-1/2 h-48 md:h-full object-cover'/>
      <div className='w-full md:w-1/2 h-auto md:h-full font-semibold about-us flex flex-col items-center justify-center gap-6 underline underline-offset-5 decoration-amber-50/80 decoration-wavy shadow-2xl shadow-amber-500/60 p-4 rounded-xl'>
      <h1 className='text-5xl shadow-2xl shadow-amber-500/80'>{dishName}</h1>
      <h2 className='text-4xl shadow-2xl shadow-amber-500/80'>{dishPrice}</h2>
      </div>
    </div>
  )
}

export default Dishs
