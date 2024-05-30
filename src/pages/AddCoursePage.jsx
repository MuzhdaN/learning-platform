import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCoursePage = ({handleAddCourseSubmit}) => {

    const [courseName, setCourseName] = useState('');
    const [level, setLevel] = useState('Beginner');
    const [courseDesc, setcourseDesc] = useState('');
    const [fee, setFee] = useState('');
    const [courseLocation, setCourseLocation] = useState('');
    const [schedule, setSchedule] = useState('');
    const [duration, setDuration] = useState('');
    const [learningObjectives, setLearningObjectives] = useState('');
    const [instructorName, setinstructorName] = useState('');
    const [instructorbackground, setInstructorbackground] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newCourseData = {
            courseName,
            level, 
            description: courseDesc,
            fee,
            schedule,
            duration,
            learningObjectives,
            courseLocation,
            instructor: {
                name: instructorName,
                background: instructorbackground,
                email, 
                phone
            },
        };

        handleAddCourseSubmit(newCourseData);
        toast.success('Course Added Sucessfully.')
        return navigate('/courses');
    };

    
  return (
    <section className="bg-violet-200">
        <div className="container m-auto max-w-2xl py-24 ">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center">
                        Add Course
                    </h2>
                    
                    <div className="mb-4">
                        <label htmlFor="level" className="block text-violet-900 font-bold mb-2"> Level </label>
                        <select 
                            name="level"
                            id="level" 
                            className="border rounded w-full py-2 px-3"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="pre-intermediate">pre-intermediate</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-violet-900 font-bold mb-2"> 
                            Course Name
                        </label>
                        <input 
                            type="text"
                            id="courseName"
                            name="courseName"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="eg. My Course Name"
                            required
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-violet-900 font-bold mb-2"> 
                            Course Description
                        </label>
                        <textarea 
                            type="text"
                            id="description"
                            name="description"
                            rows = "4"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder= "Add any course duties, expectations, requirements, etc"
                            required
                            value={courseDesc}
                            onChange={(e) => setcourseDesc(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="fee"
                            className="block text-violet-900 font-bold mb-2"
                        >
                            Fee
                        </label>
                        <input 
                            type="text"
                            id="fee"
                            name="fee"
                            className="border rounded w-full py-2 px-3"
                            placeholder="eg. $50"
                            required
                            value={fee}
                            onChange={(e) => setFee(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-violet-900 font-bold mb-2"> 
                            Schedule
                        </label>
                        <input 
                            type="text"
                            id="schedule"
                            name="schedule"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="eg. Monday to Friday, 9am - 5pm"
                            required
                            value={schedule}
                            onChange={(e) => setSchedule(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-violet-900 font-bold mb-2"> 
                            Duration
                        </label>
                        <input 
                            type="text"
                            id="duration"
                            name="duration"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="eg. 4 Weeks"
                            required
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-violet-900 font-bold mb-2'>
                            Course Location
                        </label>
                        <input
                            type='text'
                            id='courseLocation'
                            name='courseLocation'
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='Where the lessons will take place?'
                            required
                            value={courseLocation}
                            onChange={(e) => setCourseLocation(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="learningObjectives" className="block text-violet-900 font-bold mb-2"> 
                            Learning Objectives
                        </label>
                        <textarea 
                            type="text"
                            id="learningObjectives"
                            name="learningObjectives"
                            rows = "4"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder= "Add any course curriculm or what will be covered"
                            required
                            value={learningObjectives}
                            onChange={(e) => setLearningObjectives(e.target.value)}
                        />
                    </div>

                    <h3 className="text-center font-semibold text-lg"> 
                         Instructor Info
                    </h3>

                    <div className="mb-4">
                        <label 
                            htmlFor="instructorName"
                            className="block text-violet-900 font-bold mb-2"
                        >
                            Name
                        </label>
                        <input type="text"
                            id="name"
                            name="name"
                            placeholder=" Instructor Name"
                            className="border rounded w-full py-2 px-3 mb-2"
                            required
                            value={instructorName}
                            onChange={(e) => setinstructorName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="instructorbackground"
                            className="block text-violet-900 font-bold mb-2"
                        >
                            Bacground
                        </label>
                        <textarea
                            name="instructorbackground"
                            id="instructorbackground"
                            rows="4"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="Tell us about yourself?"
                            value={instructorbackground}
                            onChange={(e) => setInstructorbackground(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="email"
                            className="block text-violet-900 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="myAddress@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="phone"
                            className="block text-violet-900 font-bold mb-2"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="border rounded w-full py-2 px-3 mb-2"
                            placeholder="00-88-666-99"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            className="bg-violet-600 hover:bg-violet-700 text-white 
                                font-bold py-2 px-4 rounded-full w-full focus:outline-none 
                                focus:shadow-outline mb-2"
                            type="submit"
                        >
                            Add Course
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </section>
  )
}

export default AddCoursePage;