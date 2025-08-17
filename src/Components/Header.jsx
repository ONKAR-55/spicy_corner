import { useState } from "react"
import { animate, color, motion } from "motion/react"
import { Menu, X } from "lucide-react"

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const NavItems = [
    { name: "Home", href: "Home" },
    { name: "Menu", href: "Menu" },
    { name: "Contact Us", href: "Contact Us" },
    { name: "Reservation", href: "Reservation" },
    { name: "About Us", href: "About Us" }
  ]

  return (
    <motion.header
      className="w-full md:h-24 py-5 bg-white flex text-amber-500 items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: -3 }}
      transition={{ duration: 0.8 }}>

      <motion.h1
        className="text-xl font-medium text-amber-500 ml-4 hover:text-amber-600 duration-200 ease-in hover:text-[2rem] md:text-2xl lg:text-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 0.9 }}>
        Spicy Corner
      </motion.h1>

      {/* Desktop Navigation */}
      <nav className="h-12 md:flex text-xl items-center text-center gap-5 ml-auto mr-0 hidden text-shadow-2xs text-shadow-amber-700 hover:text-shadow-none">
        {NavItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, color: "#f59e0b", textDecoration: "underline", textDecorationColor: "#f59e0b" }}
            whileTap={{ scale: 0.9 }}
            className="text-amber-400">
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Order Button */}
      <motion.button
        className="bg-amber-500 text-white hover:bg-amber-100 hover:text-amber-500 ease-in duration-200 p-3 hidden md:flex ml-auto mr-10 md:xl lg:text-2xl rounded-xl rounded-l-4xl"
        initial={{opacity: 0, y: -50, scale: 0}}
        animate={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.9, delay: 0.1}}
        href="orderForm">
        Order Now
      </motion.button>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden ml-auto mr-5 text-2xl text-amber-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.2, color: "#f59e0b" }}
        onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </motion.button>

      {/* Mobile Menu Card*/}
      <motion.nav
        className={`absolute top-17.5 right-0 w-80 bg-white shadow-lg`}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: menuOpen ? 0 : '100%', opacity: menuOpen ? 1 : 0 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {NavItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, color: "#f59e0b", textDecoration: "underline", textDecorationColor: "#f59e0b" }}
            whileTap={{ scale: 0.9 }}
            className="block p-4 bg-white border-1 border-amber-500">
            {item.name}
          </motion.a>
        ))}
      </motion.nav>
      


    </motion.header>
  )
}

export default Header