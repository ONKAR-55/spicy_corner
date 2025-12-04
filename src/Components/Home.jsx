import { motion } from 'motion/react'
import React from 'react'
import pizza_round from '../assets/pizza_round.png'
import '../App.css'

function Home() {
  return (
    <motion.section
      id="Home"
      className="h-150 w-full sm:pl-20 pl-2 bg-transparent flex items-center mt-10 ease-in-out gap-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -3 }}
      transition={{ duration: 0.8 }}
      >
        <motion.div className='block w-100 text-black text-left home bg-amber-100/20 text-shadow-'>
        <h1 className='gap-1.5 font-bold sm:text-5xl text-left text-2xl'>The <span className='text-amber-500'>best</span> pizza <br />on the block.</h1>
        <h4 className='sm:text-xl mt-6 font-medium text-amber-500'>Don't take our words for it. <br /> Try it for yourself and thaks us later.</h4>
        </motion.div>

        <motion.div
         className='sm:w-120 bg-amber-50 border-2 sm:h-120 items-center content-center rounded-full hover:shadow-2xl hover:shadow-amber-200 w-10 h-10 ml-60 duration-300 ease-in-out'
         animate={{ rotate: [0,360]}}
         transition={{repeat : Infinity, repeatType: 'loop', duration: 50, ease: 'linear'}}>
          <img src={pizza_round} alt="Pizza" />
         </motion.div>

      </motion.section>
  )
}

export default Home