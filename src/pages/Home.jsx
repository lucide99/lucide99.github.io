import React from 'react'
import Hero from '../sections/Hero.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import ProjectsGrid from '../sections/ProjectsGrid.jsx'
import SkillsGrid from '../sections/SkillsGrid.jsx'
import ContactBar from '../sections/ContactBar.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsGrid />
      <SkillsGrid />
      <ContactBar />
    </>
  )
}


