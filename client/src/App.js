import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Dashaboard from './components/Dahsboard/Dashaboard'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Dashaboard/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App