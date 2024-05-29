import React from 'react';
import courses from '../courses.json';
import Course from './Course';

const courseLists = ({isHome = false}) => {
    console.log(courses)
  return (
    <section className="bg-violet-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-violet-500 mb-6 text-center">
            {isHome ? 'Recent Courses' : 'All Courses'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            {courses.map((course) => (
                <Course key={course.id} course={course} />
            ))}
          </div>

    </div>
  </section>

  )
}

export default courseLists