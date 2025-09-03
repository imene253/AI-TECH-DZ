import React from 'react'
import { Hero } from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import Testimonal from '../../components/students/Testimonal'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/educator/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <Testimonal/>
      <CallToAction/>
      <Footer/>
      </div>
  )
}

export default Home