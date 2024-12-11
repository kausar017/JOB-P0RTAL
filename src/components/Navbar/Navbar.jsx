import { Link, NavLink } from "react-router-dom";
import bg from '../../assets/cool-background.svg'

import './Navbar.css'
const Navbar = () => {

    const link = <>
        <div className="space-x-3 flex max-sm:flex-col">
            <NavLink to={'/'} className="btn btn-sm  btn-outline text-white bg-purple-500 hover:bg-purple-500"><button>Home</button></NavLink>
            <NavLink className="btn btn-sm hover:bg-purple-500 btn-outline  text-white bg-purple-500 "><button>All Movies</button></NavLink>
            <NavLink className="btn btn-sm hover:bg-purple-500 btn-outline  text-white bg-purple-500 "><button>Add Movie</button></NavLink>
            <NavLink className="btn btn-sm hover:bg-purple-500 btn-outline  text-white bg-purple-500"><button>My Favorites</button></NavLink>

        </div>
    </>

    return (
        <div className="bg-base-200 w-full py-3 backdrop-blur-lg z-10 fixed" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "end",
                // height: "100vh",
                // width: "100%",

        }}>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl font-bold cursor-pointer">Job Portel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <Link to={'/register'} className="hover:underline hover:text-sky-500 text-white">Register</Link>
                    <Link to={'/login'} className="btn btn-sm btn-outline text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;