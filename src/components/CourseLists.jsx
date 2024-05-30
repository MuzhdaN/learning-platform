import { useEffect, useState } from 'react';
import Course from './Course';
import Loader from './Loader';

const CourseLists = ({isHome = false}) => {
    
    const [coursesData, setCoursesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoursesData = async() =>{
            const apiURl = isHome ? 'https://mycourses-backend.onrender.com/courses/?_limit=3'
                : 'https://mycourses-backend.onrender.com/courses';
            try {
                const response = await fetch(apiURl);
                console.log(response)
                const data = await response.json();
                setCoursesData(data);
            } catch (error) {
                console.log('error fetching data', error);    
            }finally {
                setLoading(false);
            }
      
        }
        fetchCoursesData();
    },[])

  return (
    <section className="bg-violet-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-violet-500 mb-6 text-center">
            {isHome ? 'Recent Courses' : 'All Courses'}
        </h2>
        {loading ? (
            <Loader loading={loading}/>
          
        ): (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                {coursesData.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>
            )
        }
        
    </div>
  </section>

  )
}

export default CourseLists