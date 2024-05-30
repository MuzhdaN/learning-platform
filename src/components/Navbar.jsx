
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo256.png';


const Navbar = () => {

  const activeLink = ({isActive}) => 
      isActive 
      ? 'bg-violet-950 hover:bg-gray-900 rounded-md px-3 py-2' 
      : 'hover:bg-gray-900 rounded-md px-3 py-2';
  
  
  return (
    <nav className="bg-violet-700 border-b border-violet-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
            
            <NavLink to='/' className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <img src={logo} className="h-10 w-auto" alt="React Courses Logo" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  My Courses
                </span>
            </NavLink>

          <div className='md:ml-auto'>
            <div className=" flex space-x-2 text-white">
                <NavLink
                 to="/" 
                 className={activeLink}>
                  Home
                </NavLink>
                <NavLink 
                  to="/courses" 
                  className={activeLink}>
                    Courses
                </NavLink>
                <NavLink 
                  to="/add-course"
                  className={activeLink}>
                    Add Course
                </NavLink>
            </div> 
            </div> 
        </div>
    </nav>
  )
}

export default Navbar;