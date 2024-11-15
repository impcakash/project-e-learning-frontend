import React from 'react'
import FirstComponent from './components/FirstComponent';
import CourseDetailsComponent from './components/CourseDetailsComponent';
import CoursePricingCard from './components/CoursePricingCard';
import CourseDeals from './components/CourseDeals';
import MarketingArticle from './components/MarketingArticle';

function Course_Details() {
  return (
    <div>

        <FirstComponent/>
          <div className="container mx-auto"> {/* Removed padding from container to eliminate gaps */}
          <div className="flex flex-col md:flex-row"> {/* Removed gap between flex items */}
            {/* Course Details Section - 65% width on medium and larger screens */}
            <div className="h-full w-full md:basis-[95%] left-3 right-0"> {/* Ensured correct width for this section */}
              <CourseDetailsComponent />
            </div>

            {/* Course Pricing Section - 35% width on medium and larger screens */}
            <div className="w-full md:w-2/4 p-8 ml-7 mr-0">
            <CoursePricingCard />
            </div>
            
          </div>
          
        </div>
        <br />
        <MarketingArticle/>
        <CourseDeals/>
    </div>

  )
}

export default Course_Details