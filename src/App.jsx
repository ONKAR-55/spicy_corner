import {React, useState} from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import Dishs from './Components/Dishs.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import dishImage1 from './assets/DishImage/AlooGobi.jpg'
import dishImage2 from './assets/DishImage/Pasta.jpg'
import dishImage3 from './assets/DishImage/ChilliPotato.jpg'
import dishImage4 from './assets/DishImage/DaalMakhni.jpg'
import dishImage5 from './assets/DishImage/FrenchFries.jpg'
import Menu from './Components/Menu.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main-container">

      <Header  openMenu = {() => setIsMenuOpen(true)}/>
      {isMenuOpen && (
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      )}
      <Home />
      <div className="list px-4 md:px-10 h-auto md:h-96 gap-10 md:gap-20 border-2 border-amber-50/40 w-full mt-20 flex items-center snap-x overflow-auto scroll-smooth scroll-px-4 mb-20 py-6">
        <Dishs dishName={"Aloo Gobi"} dishImage={dishImage1} dishPrice={"160"}/>
        <Dishs dishName={"Pasta"} dishImage={dishImage2} dishPrice={"200"}/>
        <Dishs dishName={"Chilli Potato"} dishImage={dishImage3} dishPrice={"180"}/>
        <Dishs dishName={"Daal Makhni"} dishImage={dishImage4} dishPrice={"150"}/>
        <Dishs dishName={"French Fries"} dishImage={dishImage5} dishPrice={"120"}/>
      </div>
      <About />
      <Contact />
      <Footer />
    
    </div>
  )
}

export default App