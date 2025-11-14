import { motion } from 'motion/react'
import React from 'react'

function Home() {
  return (
    <motion.home
      className="w-full h-100 sm:pl-20 pl-2 bg-white flex items-center mt-4 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -3 }}
      transition={{ duration: 0.8 }}
      >
        <motion.div className='block w-1/2 text-black text-left'>
        <h1 className='gap-1.5 font-bold sm:text-5xl text-left text-2xl'>The <span className='text-amber-500'>best</span> sandwiches <br />on the block.</h1>
        <h4 className='sm:text-xl mt-6 font-medium text-amber-500'>Don't take our words for it. <br /> Try it for yourself and thaks us later.</h4>
        </motion.div>

        <motion.div
         className='sm:w-90 bg-amber-50 sm:h-90 items-center content-center rounded-full duration-1000 hover:shadow-2xl hover:shadow-amber-200 w-50 h-50'
         animate={{rotate : 360}}
         transition={{repeat : Infinity, duration: 20, ease : "linear"}}></motion.div>

      </motion.home>
  )
}

export default Home