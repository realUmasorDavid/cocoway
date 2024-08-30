import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Contact />
        <Footer />
    </>
  )
}
