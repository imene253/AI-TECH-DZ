import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const categories = [
  { key: 'web-dev', label: 'Web Development', icon: assets.course_3_thumbnail },
  { key: 'data-science', label: 'Data Science', icon: assets.course_4_thumbnail },
  { key: 'python', label: 'Python', icon: assets.course_2_thumbnail },
  { key: 'javascript', label: 'JavaScript', icon: assets.course_1_thumbnail },
  { key: 'cyber', label: 'Cybersecurity', icon: assets.course_4 },
]

const CategorySection = () => {
  const navigate = useNavigate()

  const onCategoryClick = (label) => {
    navigate('/course-list/' + encodeURIComponent(label))
    window.scrollTo(0, 0)
  }

  return (
    <div className='py-10 md:px-40 px-8 w-full'>
      <h2 className='text-3xl font-medium text-gray-800'>Browse by category</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Pick a topic to get started quickly.</p>

      <div className='grid grid-cols-auto gap-4 mt-8'>
        {categories.map((cat) => (
          <div key={cat.key} onClick={() => onCategoryClick(cat.label)} className='flex items-center gap-3 p-4 border border-gray-500/20 rounded-lg bg-white hover:shadow-md transition cursor-pointer'>
            <img src={cat.icon} alt={cat.label} className='w-10 h-10 rounded object-cover' />
            <p className='text-gray-800 font-medium'>{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySection


