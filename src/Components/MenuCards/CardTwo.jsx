import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const vegFood = [
  { name: "Samosa (2 pcs)", price: "40" },
  { name: "Aloo Paratha", price: "60" },
  { name: "Veg Burger", price: "80" },
  { name: "Chole Bhature", price: "100" },
  { name: "Dal Tadka", price: "110" },
  { name: "Masala Dosa", price: "120" },
  { name: "Hakka Noodles", price: "130" },
  { name: "Veg Fried Rice", price: "140" },
  { name: "Mix Veg Curry", price: "150" },
  { name: "Veg Biryani", price: "180" },
  { name: "Veg Thali", price: "190" },
  { name: "Mushroom Masala", price: "220" },
  { name: "Paneer Tikka", price: "250" },
  { name: "Malai Kofta", price: "260" },
  { name: "Paneer Butter Masala", price: "280" },
  { name: "Special Veg Thali", price: "350" },
];

const extras = [
  { name: "Extra Ketchup", price: "5" },
  { name: "Green Chutney", price: "10" },
  { name: "Tandoori Roti", price: "15" },
  { name: "Butter Naan", price: "30" },
  { name: "Extra Cheese", price: "25" },
  { name: "Extra Butter", price: "20" },
];

function CardTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-12 bg-black text-orange-500 flex flex-col items-center justify-center">
       <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Vegetarian Delights
      </motion.h1>

      <div className="w-full max-w-6xl px-6">
        <motion.div 
          className="bg-black border-2 border-orange-600/40 p-8 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {vegFood.map((item, index) => (
                <div key={index} className="flex justify-between items-end group">
                    <span className="text-xl font-medium text-orange-400 group-hover:text-orange-300 transition-colors">{item.name}</span>
                    <span className="flex-grow border-b border-dotted border-orange-700/60 mx-3 mb-1"></span>
                    <span className="text-2xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">₹{item.price}</span>
                </div>
                ))}
            </div>

            {/* Extras Dropdown */}
            <div className="mt-10 border-t border-orange-800/50 pt-6">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center bg-orange-900/20 hover:bg-orange-900/30 p-4 rounded-lg border border-orange-600/30 transition-all text-orange-400 font-semibold text-xl"
                >
                    <span>Add-ons & Extras</span>
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-orange-950/10 rounded-b-lg border-x border-b border-orange-600/30">
                                {extras.map((extra, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-orange-300/80 hover:text-orange-200">
                                        <span>{extra.name}</span>
                                        <span className="font-bold text-orange-500">₹{extra.price}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardTwo
