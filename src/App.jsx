import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Card from "./components/card/card";
import Partners from "./components/partner/partner";
import Socials from "./components/socials/socials";
import Action from "./components/action/action";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Partners />
      <Socials />
      <Action />
      <Footer />
    </div>
  );
};

export default App;
