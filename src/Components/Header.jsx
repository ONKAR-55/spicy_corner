import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import '../App.css'

const NavItems = [
  { name: "Home", href: "#Home" },
  { name: "Menu", onClick: "openMenu" },
  { name: "Reservation", href: "#Reservation" },
  { name: "About Us", href: "#About Us" },
  { name: "Contact Us", href: "#Contact Us" },
];

function NavLinks({ isMobile, closeMenu, openMenu }) {
  return (
    <>
      {NavItems.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: isMobile ? index * 0.1 : 0 }}
          whileHover={{
            scale: 1.1,
            color: "#f59e0b",
            textDecoration: "underline",
            textDecorationColor: "#f59e0b",
          }}
          whileTap={{ scale: 0.9 }} 
          className={ isMobile ? "block p-4 text-2xl text-amber-500 hover:text-amber-600" : "text-amber-400 cursor-pointer"}
          onClick={(e) => {
            if (item.name === "Menu") {
              e.preventDefault();
              if (openMenu) openMenu();
            }
            if (isMobile && closeMenu) closeMenu();
          }}
        >
          {item.name}
        </motion.a>
      ))}
    </>
  );
}

function Header({ openMenu }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black opacity-50 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.header
        className={`w-full md:h-24 py-3 md:py-5 flex text-amber-500 items-center md:sticky top-0 shadow-lg z-20 header transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-amber-500/50 shadow-none" 
            : "bg-transparent border-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-medium text-amber-500 ml-4 hover:text-amber-600 duration-200 ease-in md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          Spicy Corner
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="h-12 md:flex text-xl items-center text-center gap-5 ml-auto mr-0 hidden text-shadow-2xs text-shadow-amber-700 hover:text-shadow-none">
          <NavLinks isMobile={false} openMenu={openMenu} />
        </nav>

        {/* Order Button */}
        <motion.a
          className="bg-amber-500 text-white hover:bg-amber-100 hover:text-amber-500 ease-in duration-200 p-4 hidden md:flex ml-auto mr-10 md:text-xl lg:text-2xl rounded-xl transform hover:scale-105 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Order List
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden ml-auto mr-5 text-4xl text-amber-500"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.2, color: "#f59e0b" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={40} /> : <Menu size={40} />}
        </motion.button>

        {/* Mobile Menu Card*/}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col pt-20 px-6 gap-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={closeMenu} className="absolute top-6 right-6 text-amber-500">
                <X size={32} />
              </button>
              <NavLinks isMobile={true} closeMenu={closeMenu} openMenu={openMenu} />
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Header;