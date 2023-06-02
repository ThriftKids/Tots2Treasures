import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignupForm from "./components/customs/SignupForm";
import LoginForm from "./components/customs/LoginForm";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import Inventory from "./components/Inventory/Inventory";
import Purchases from "./components/Purchases/Purchases";
import "./App.css";
import Final from "./components/Final/Final";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/purchases" element={<Purchases />} />
        <Route path="/inventory" element={<Inventory />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/final" element={<Final/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
