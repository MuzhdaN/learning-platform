import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements 
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CourseInfoPage, {courseLoader} from "./pages/CourseInfoPage";
import AddCoursePage from "./pages/AddCoursePage";
import EditCoursePage from "./pages/EditCoursePage";

export default function App() {


  const handleAddCourse = async (newCourseData) => {
    const res = await fetch('https://mycourses-backend.onrender.com/courses', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(newCourseData)
    });
    return;
  }

  const editCourse = async (courseData) => {
    // console.log(courseData.id)
    const res = await fetch(`https://mycourses-backend.onrender.com/courses/${courseData.id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(courseData)
    });
    return;
  }


  const deleteCourse = async (id) => {
    const res = await fetch(`https://mycourses-backend.onrender.com/courses/${id}`, {
      method: 'DELETE',
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<MainLayout />}>
        <Route index element={<Home />}/>
        <Route
          path="/courses"
          element={<CoursesPage />}
        />
        <Route
          path="/add-course"
          element={<AddCoursePage handleAddCourseSubmit={handleAddCourse} />}
        />
        <Route 
          path="/edit-course/:id"
          element={<EditCoursePage handleEditCourse={editCourse} />}
          loader={courseLoader}
        />
        <Route 
          path="/courses/:id"
          element={<CourseInfoPage deleteCourse={deleteCourse} />}
          loader={courseLoader}
        />
        <Route 
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    )
  )

  return ( <RouterProvider router={router} />
  )
}