import { motion } from 'motion/react'
import React from 'react'
import pizza_round from '../assets/pizza_round.png'
import '../App.css'

function Home() {
  return (
    <motion.section
      id="Home"
      className="w-full min-h-screen md:h-auto px-4 sm:px-20 bg-transparent flex flex-col-reverse md:flex-row items-center justify-center ease-in-out gap-10 py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -3 }}
      transition={{ duration: 0.8 }}
      >
        <motion.div className='block w-full md:w-1/2 text-black text-left home bg-amber-100/20 p-6'>
        <h1 className='gap-1.5 font-bold text-5xl text-left'>The <span className='text-amber-500'>best</span> pizza <br />on the block.</h1>
        <h4 className='text-xl mt-6 font-medium text-amber-500'>Don't take our words for it. <br /> Try it for yourself and thaks us later.</h4>
        </motion.div>

        <motion.div
         className='w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-amber-50 border-2 items-center content-center rounded-full hover:shadow-2xl hover:shadow-amber-200 duration-300 ease-in-out flex justify-center'
         animate={{ rotate: [0,360]}}
         transition={{repeat : Infinity, repeatType: 'loop', duration: 50, ease: 'linear'}}>
          <img src={pizza_round} alt="Pizza" />
         </motion.div>

      </motion.section>
  )
}

export default Home