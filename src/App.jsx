import React from 'react'
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

function App() {

  return (
    <div className="main-container">

      <Header />
      <Home />
      <div className="list px-10 h-80 gap-5 border-2 border-amber-50/40 w-full mt-20 flex items-center snap-x overflow-auto scroll-smooth scroll-px-4 mb-20">
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