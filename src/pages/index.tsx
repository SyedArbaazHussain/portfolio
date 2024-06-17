import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/Lamp";
import { FlipWords } from "@/app/components/FlipWords";
import { Meteors } from "@/app/components/Meteors";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
// import Projects from "./projects";
import "@/app/globals.css";

const IndexPage = () => {
  return (
    <>
    <Home/>
    <About/>
    <Contact/>
    {/* <Projects/> */}
    </>
  );
};

export default IndexPage;
