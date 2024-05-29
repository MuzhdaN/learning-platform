import { useState } from "react";
import { MdLocationPin } from "react-icons/md";


const Course = ({course}) => {
  
  const [showFullDescription, setShowFullDesciption] = useState(false);

  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }


  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
          <div className="mb-6 p-4">
            <div className="text-gray-600 my-2"> 
                {course.courseType}  
            </div>
            <h3 className="text-xl font-bold">
                {course.courseName}
            </h3>
          </div>

          <div className="mb-2">
            {description}
          </div>

          <button 
            onClick={() => setShowFullDesciption((prevState) => !prevState)} 
            className="text-violet-700 mb-3 hover:text-violet-900"
          >
            {showFullDescription ? 'less' : 'More'}
          </button>

          <h3 className="text-violet-500 mb-2"> {course.price} / Month </h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <MdLocationPin className="inline text-lg mb-1 mr-1" />
              {course.courseLocation}
            </div>
            <a
              to={`/courses/${course.id}`}
              className ="h-[36px] bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
            Read More
            </a>
          </div>
      </div>
    </div>
  )
}

export default Course