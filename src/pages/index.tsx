import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import "@/app/globals.css";

const IndexPage = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default IndexPage;
