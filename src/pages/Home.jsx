import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import CoursesLists from '../components/CourseLists';
import ViewAllCourses from '../components/ViewAllCourses';

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <CoursesLists isHome={true} />
        <ViewAllCourses />
    </>
  );
};

export default HomePage;