import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center text-2xl font-semibold'>
      <h3>Page you're looking for doesn't exist</h3>
      <Link 
        className="text-base font-medium text-white bg-red-700 px-4 py-2 mt-5 rounded-md hover:bg-red-800 transition duration-300" 
        to="/"
      >
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound