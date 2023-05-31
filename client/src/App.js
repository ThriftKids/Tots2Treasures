import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SignupForm from './components/utils/SignupForm'
import LoginForm from './components/utils/LoginForm'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/login" element={<LoginForm/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App