import React from 'react'
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import TechSkills from "../sections/TechSkills";
import Projects from "../sections/Projects";
import Background from "../sections/Background";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import MyApproach from '../sections/MyApproach';
import MyCertificates from '../sections/MyCertificates';

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <MyApproach />
      <TechSkills id="skills" />
      <Projects id="projects" />
      <Background id="background" />
      <MyCertificates id="certificates" />
      <Contact id="contact" />
      <Footer />
    </>
  )
}

export default Main
