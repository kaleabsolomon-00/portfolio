import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Projects from "./components/Projects.jsx";
import ContactFooter from "./components/ContactFooter.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Capabilities />
        <Projects />
      </main>
      <ContactFooter />
    </div>
  );
}
