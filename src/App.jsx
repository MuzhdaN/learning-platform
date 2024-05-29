import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";
import CourseLists from "./components/CourseLists";

export default function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <CourseLists isHome = {true} />
    </>
  )
}