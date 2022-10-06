import React from "react";
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Fragment } from 'react';



function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))

    

  }
 



  return (
    <reactfragment>
    <div className="wrapper">
    <Navbar  change = {"dark"}/>
    <div className="myPage"  id  = {theme}>
     
     <div className="icon_wrapper">
   <FontAwesomeIcon id = "whoops" icon={faToggleOn} onClick = {toggleTheme} />
   </div>
    
     </div>
     </div>
    </reactfragment>
  );
}

export default App;
