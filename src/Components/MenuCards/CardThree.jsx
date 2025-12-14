import React from 'react'
import { motion } from 'motion/react'

const desserts = [
  { name: "Gulab Jamun (2 pcs)", price: "50" },
  { name: "Rasgulla (2 pcs)", price: "60" },
  { name: "Vanilla Ice Cream", price: "70" },
  { name: "Kheer", price: "80" },
  { name: "Fruit Salad", price: "90" },
  { name: "Gajar Ka Halwa", price: "100" },
  { name: "Rasmalai (2 pcs)", price: "110" },
  { name: "Brownie with Ice Cream", price: "120" },
  { name: "Chocolate Mousse", price: "130" },
  { name: "Kulfi Falooda", price: "140" },
  { name: "Cheesecake Slice", price: "150" },
  { name: "Tiramisu", price: "180" },
];

function CardThree() {
  return (
    <div className="w-full py-12 bg-orange-50 text-orange-900 flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-orange-800 drop-shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sweet Endings
      </motion.h1>

      <div className="w-full max-w-6xl px-6">
        <motion.div 
          className="bg-white border border-orange-100 p-8 rounded-2xl shadow-xl shadow-orange-100/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {desserts.map((item, index) => (
                <div key={index} className="flex justify-between items-end group hover:bg-orange-50/50 p-2 rounded-lg transition-colors duration-300">
                    <span className="text-xl font-medium text-orange-800 group-hover:text-orange-600 transition-colors">{item.name}</span>
                    <span className="flex-grow border-b border-dotted border-orange-300 mx-3 mb-1"></span>
                    <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-500 transition-colors">₹{item.price}</span>
                </div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardThree
