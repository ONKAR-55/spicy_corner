import './App.css'
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import React from 'react'

function App() {

  return (
    <>
      <img className='w-full h-full absolute top-0 left-0 brightness-80 blur-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlRnR_co8I_PF1Qb4GR3i5ABIWwxuy5fxQA&s" alt="banner" />
      
      <Header />
      <Home />
    </>
      
  )
}

export default App