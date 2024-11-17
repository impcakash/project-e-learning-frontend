import React from 'react'
import CourseSearch from './components/CourseSearch'
import CourseList from './components/CourseList'
import LearningPlatformBanner from './components/LearningPlatformBanner'
import CourseList2 from './components/CourseList2'
import ClassesTaughtByCreators from './components/ClassesTaughtByCreators'
import Offers from '../Checkout/components/Offers'
import TestimonialCard from './components/TestimonialCard'

const Search = () => {
  return (
    <div>
      <CourseSearch />
      <CourseList />
      <LearningPlatformBanner />
      <CourseList2 />
      <ClassesTaughtByCreators />
      <div className="m-4"><Offers /></div>
    </div>
  )
}

export default Search
