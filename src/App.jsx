
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Heros from './components/Heros.jsx'
import Cards from './components/Cards.jsx'
import Footers from './components/Footers.jsx'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Heros/>
      <Cards/>
      <Footers/>
      
    </div>
  )
}
