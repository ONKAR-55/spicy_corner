import React from 'react'
import '../App.css'

function Dishs({ dishName, dishImage, dishPrice }) {
  return (
    <div className=" items w-150 h-70 flex flex-shrink-0 snap-start border-2 border-amber-200/50 p-1.5 ">
      <img src={dishImage} alt={dishName} className='border-3 border-amber-500/60 rounded-2xl hover:scale-110 duration-300'/>
      <div className=' font-semibold about-us flex flex-col items-center justify-center ml-20 gap-10 underline underline-offset-5  decoration-amber-50/80 decoration-wavy shadow-2xl shadow-amber-500/60'>
      <h1 className='text-5xl shadow-2xl shadow-amber-500/80'>{dishName}</h1>
      <h2 className='text-3xl shadow-2xl shadow-amber-500/80'>{dishPrice}</h2>
      </div>
    </div>
  )
}

export default Dishs
