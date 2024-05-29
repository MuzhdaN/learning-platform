import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 mx-10 rounded-lg">
            <Card>
                <h2 className="text-2xl font-bold">
                    Learn with Us
                </h2>
                <p className="mt-2 mb-4">
                    Find the perfect course to expand your knowledge
                </p>
                <a
                  to="/courses"
                  className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                >
                    Browse Courses
                </a>
            </Card>
            <Card bg='bg-violet-100'>
                <h2 className="text-2xl font-bold">
                    Teach with Us
                </h2>
                <p className="mt-2 mb-10">
                  Share your expertise and add your course
                </p>
                <a
                  to="/add-course"
                  className="inline-block bg-violet-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                >
                  Add Course
                </a>
            </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards