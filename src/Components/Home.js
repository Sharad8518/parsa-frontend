import React from 'react'
import Explore from './Explore'
import Footer from './Footer'
import FoundationCourses from './FoundationCourses'
import MainHome from './MainHome'
import Navigation2 from './Navigation2'
import Pricing from './Pricing'

export default function Home() {
  return (
    <>
      <Navigation2 />
      <MainHome/>
      <Explore />
      <FoundationCourses/>
      <Pricing />
      <Footer />
    </>
  )
}
