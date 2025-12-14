import React from 'react'
import { motion } from 'motion/react'

const hotDrinks = [
  { name: "Masala Chai", price: "70" },
  { name: "Hot Coffee", price: "80" },
  { name: "Green Tea", price: "90" },
  { name: "Espresso", price: "110" },
  { name: "Cappuccino", price: "120" },
  { name: "Latte", price: "140" },
  { name: "Mocha", price: "150" },
  { name: "Hot Chocolate", price: "160" },
];

const coldDrinks = [
  { name: "Lemonade", price: "90" },
  { name: "Iced Tea", price: "100" },
  { name: "Cold Coffee", price: "130" },
  { name: "Mango Shake", price: "140" },
  { name: "Blue Lagoon", price: "150" },
  { name: "Oreo Shake", price: "160" },
  { name: "Chocolate Milkshake", price: "170" },
  { name: "Strawberry Smoothie", price: "180" },
];

function CardOne() {
  return (
    <div className="w-full py-12 bg-black text-orange-500 flex flex-col items-center justify-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Beverages Menu
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        {/* Hot Drinks Section */}
        <motion.div 
          className="bg-black border-2 border-orange-600/40 p-8 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-orange-600 pb-3 text-orange-500 tracking-wider">HOT DRINKS</h2>
          <ul className="space-y-5">
            {hotDrinks.map((item, index) => (
              <li key={index} className="flex justify-between items-end group">
                <span className="text-xl font-medium text-orange-400 group-hover:text-orange-300 transition-colors">{item.name}</span>
                <span className="flex-grow border-b border-dotted border-orange-700/60 mx-3 mb-1"></span>
                <span className="text-2xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Cold Drinks Section */}
        <motion.div 
          className="bg-black border-2 border-orange-600/40 p-8 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-orange-600 pb-3 text-orange-500 tracking-wider">COLD DRINKS</h2>
          <ul className="space-y-5">
            {coldDrinks.map((item, index) => (
              <li key={index} className="flex justify-between items-end group">
                <span className="text-xl font-medium text-orange-400 group-hover:text-orange-300 transition-colors">{item.name}</span>
                <span className="flex-grow border-b border-dotted border-orange-700/60 mx-3 mb-1"></span>
                <span className="text-2xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">₹{item.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default CardOne
