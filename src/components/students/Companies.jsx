import React from 'react'
import { assets } from '../../assets/assets';
const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>
        Trusted by learners from
      </p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.unv2} alt='unv2' className='w-20 md:w-28'/>
        <img src={assets.annaba} alt='unv2' className='w-20 md:w-28'/>
        <img src={assets.ustbh} alt='unv2' className='w-20 md:w-28'/>
        <img src={assets.blida} alt='unv2' className='w-20 md:w-28'/>
        <img src={assets.algeria} alt='unv2' className='w-20 md:w-28'/>
       
      </div>
    </div>
  )
}

export default Companies