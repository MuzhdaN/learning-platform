import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CourseInfoPage = ({deleteCourse}) => {

    const navigate = useNavigate();

    const courseData = useLoaderData();
    const {id} = useParams();

    const onDelete = async (id) =>{
        const windowConfirm = window.confirm("sure?")
            if (!windowConfirm)  return;

            deleteCourse(id);

            toast.success("Course deleted successfully")

            navigate('/courses');
    }

  return (
    <>
    <section>
        <div className='container p-6 m-auto text-violet-900'>
            <Link to="/courses" className='flex items-center hover:text-violet-500'>
                <FaArrowLeft className='mr-2'/>
                back to Courses
            </Link>
        </div>
    </section>

    <section className='bg-violet-50'>
        <div className='container m-auto py-10 px-6 grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main className="">
                <div className='bg-white p-6 mb-4 rounded-r-md shadow-md'>
                    <div className='text-gray-500 mb-2'> 
                        {courseData.level} 
                    </div>
                    <h1 className='text-3xl font-bold mb-3'>
                        {courseData.courseName}
                    </h1>
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline text-lg mb-1 mr-1" />
                            {courseData.courseLocation}
                    </div>
                </div>
                <div className='bg-white p-6 mb-4 rounded-r-md shadow-md whitespace-pre-line'>
                    <div className='font-bold text-violet-900 mb-3'>
                        Course Description
                    </div>
                    <p className='mb-7'>
                        {courseData.description}
                    </p>
                    <div className="flex justify-around flex-col flex-wrap  text-left mb-1  sm:flex-row sm:text-center">
                        <div className="mb-4">
                            <div className='font-bold text-violet-900 mb-1'>
                                Fee
                            </div>
                            <p> {courseData.fee} / Month </p>
                        </div>

                        <div className="mb-4">
                            <div className='font-bold text-violet-900 mb-1'>
                                Duration
                            </div>
                            <p> {courseData.duration} </p>
                        </div>
                        <div className="mb-4">
                            <div className='font-bold text-violet-900 mb-1'>
                                Schedule
                            </div>
                            <p> {courseData.schedule} </p>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 mb-4 rounded-r-md shadow-md whitespace-pre-line'>
                    <div className='font-bold text-violet-900 mb-3'>
                        What you will learn!
                    </div>
                    <p className='mb-7'>
                        {courseData.learningObjectives}
                    </p>
                </div>
            </main>
            <aside>
                <div className='bg-white p-6 mb-4 rounded-r-md shadow-md'>
                    <div className='text-lg font-bold text-violet-900 mb-4'>
                        About Instructor
                    </div>
                    <h2 className='font-bold text-violet-950 text-xl mb-2'>
                         {courseData.instructor.name}
                    </h2>
                    <p className='mb-4 whitespace-pre-line'>
                        {courseData.instructor.background}
                    </p>
                    <hr className='text-violet-900 mb-2 p-1' />
                    <div className='mb-5'>
                        <h2 className='font-bold text-violet-950'> Email </h2>
                        <p className="my-2 bg-violet-100 p-2 font-bold max-w-xs white-space:nowrap overflow-hidden text-ellipsis">
                            {courseData.instructor.email}
                        </p>
                    </div>
                    <div>
                        <h2 className='font-bold text-violet-950'> Phone Number </h2>
                        <p className="my-2 bg-violet-100 p-2 font-bold max-w-xs white-space:nowrap overflow-hidden text-ellipsis">
                            {courseData.instructor.phone}
                        </p>
                    </div>
                </div>

                <div className='bg-white p-6 mb-4 rounded-r-md shadow-md'>
                    <div className='text-lg font-bold text-violet-900 mb-3 p-1'>
                        Manage Course
                    </div>
                    <div className='flex flex-col text-white font-bold'>
                        <Link to={`/edit-course/${id}`}
                            className='bg-violet-700 p-3 rounded-xl mb-4 hover:bg-violet-900 text-center'
                        >
                            Edit Course
                        </Link>
                        <button
                            onClick={() => onDelete(courseData.id)}
                            className='bg-red-600 p-3 rounded-xl hover:bg-red-700'
                        >
                            Delete Course
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    </section>
    </>
  )
}

const courseLoader = async ({params}) => {
    const res = await fetch (`https://mycourses-backend.onrender.com/courses/${params.id}`);
    const data = await res.json();
    return data;
}

export {CourseInfoPage as default, courseLoader}