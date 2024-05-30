import { Link } from "react-router-dom"

const ViewAllCourses = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
    <Link
      to="/courses"
      className="block bg-violet-950 text-white text-center py-4 px-6 rounded-xl hover:bg-violet-900"
    >
      View All Courses
    </Link>
  </section>
  )
}

export default ViewAllCourses