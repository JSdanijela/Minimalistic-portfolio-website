import React, { Component } from "react";
import "./index.css";
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Card from './components/Card.js';
import Description from './components/Description.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
    	<div>
    <Navbar />
     <Header />
     <About />
     <Card />
     <Description />
     <Gallery />
     <Footer />
     </div>
 
    );
  }
}

export default App;
