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
    <div className="w-full min-h-[60vh] h-auto py-12 text-orange-900 flex flex-col items-center justify-center border-2 border-orange-200 bg-amber-50/90 rounded-xl">
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
          className="bg-red-50 border-2 border-orange-100 p-8 rounded-2xl shadow-xl shadow-orange-100/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {desserts.map((item, index) => (
                <div key={index} className="flex justify-between items-end group hover:bg-orange-50/50 p-2 rounded-lg transition-colors duration-300">
                    <span className="text-xl font-medium text-orange-800 group-hover:text-orange-600 transition-colors">{item.name}</span>
                    <span className="flex-grow border-b border-dotted border-orange-300 mx-3 mb-1"></span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-500 transition-colors">₹{item.price}</span>
                      <button onClick={() => alert("Coming soon")} className="text-xs bg-orange-100 border border-orange-200 text-orange-800 px-2 py-1 rounded hover:bg-orange-200 transition-colors">List</button>
                      <button onClick={() => alert("Coming soon")} className="text-xs bg-orange-500 text-white font-semibold px-2 py-1 rounded hover:bg-orange-600 transition-colors">Order</button>
                    </div>
                </div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardThree
