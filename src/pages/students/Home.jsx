import React from 'react'
import { Hero } from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import CategorySection from '../../components/students/CategorySection'
import Teachers from '../../components/students/Teachers'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/educator/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CategorySection/>
      <CourseSection/>
      <Teachers/>
      <CallToAction/>
      <Footer/>
      </div>
  )
}

export default Home