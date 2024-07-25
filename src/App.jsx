import React from "react"
import Menus from "./assets/components/Menus"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Products from "./assets/components/Products"
import Contact from "./assets/components/Contact"
import Header from "./assets/components/Header"

 

function App(){

  return(
    <div>
    
    <Header/>
    <BrowserRouter basename="/reactfoodappone">
    <Routes>
    
     
      <Route path="/" element={<Menus/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>

     
    
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App