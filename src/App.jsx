import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
