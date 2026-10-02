import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-200 w-full p-5 mx-auto max-w-6xl shadow-xl">
            <div>
                <Link to="/">
                    <h2 className='font-bold text-slate-700 text-xl'><span className="text-slate-700 font-bold">Urban</span>Estate</h2>
                </Link>
            </div>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center" >
                <input type="text" placeholder="Search..." className=" bg-transparent w-24 focus:outline-none sm:w-64" />
                <FaSearch className="text-slate-500" />
            </form>
            <ul className="flex gap-5 justify-around">
                <li><Link to="/" className='hidden sm:inline '>Home</Link></li>
                <li><Link to="/about" className='hidden sm:inline '>About</Link></li>
                <li><Link to="/profile" className='hidden sm:inline '>Profile</Link></li>
                <li><Link to="/sign-in" className='hidden sm:inline bg-green-600 text-white px-2 py-1 rounded'>Sign In</Link></li>
                <li><Link to="/sign-up" className='hidden sm:inline bg-[#5897EE] text-white px-2 py-1 rounded'>Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Navbar