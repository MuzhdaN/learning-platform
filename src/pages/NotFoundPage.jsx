import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
    <div className='text-center flex flex-col justify-center items-center h-96 p-8'>
        <FaExclamationTriangle className='text-yellow-400 text-9xl'/>
        <h3 className='text-3xl mb-6 font-semibold'>Lost your Way!</h3>
        <Link to='/'
            className=" bg-violet-700  text-white py-4 px-5 rounded hover:bg-violet-900">
        Back
        </Link>
    </div>
    </>
  )
}

export default NotFoundPage