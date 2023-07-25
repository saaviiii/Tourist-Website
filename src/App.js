import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NavbarMain from "./components/Navbar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";


class App extends Component {
   render() {
    return (
      <div className="App">
        <NavbarMain />
       
        <Router>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/tour" element={<Tour/>}/>
          </Routes> 
        </Router>
      
       
      </div>
    );
  }
}

export default App;
