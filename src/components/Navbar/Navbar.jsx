import { Link, NavLink } from "react-router-dom";
import bg from '../../assets/cool-background.svg'
import logo from '../../assets/Logo/logo.png'

import './Navbar.css'
import { useContext } from "react";
import Authcontext from "../../Authentication/context/AuthContext";
import Swal from "sweetalert2";
import { div } from "motion/react-client";
const Navbar = () => {

    const { user, singOut } = useContext(Authcontext)
    // console.log(user);

    const handaleSingOut = () => {
        singOut()
            .then(() => {
                Swal.fire('LogOUt Success', 'Successfully Signed Out', 'success');
            })
            .catch(error => {
                Swal.fire('Error', 'User not logged out. Try again later.', 'error');

            })
    }

    const link = <>
        <div className="space-x-3 flex max-sm:flex-col">
            <NavLink to={'/'} className="btn btn-sm  btn-outline text-white bg-purple-500 hover:bg-purple-500"><button>Home</button></NavLink>
            <NavLink className="btn btn-sm hover:bg-purple-500 btn-outline  text-white bg-purple-500 "><button>Hello</button></NavLink>
            <NavLink className="btn btn-sm hover:bg-purple-500 btn-outline  text-white bg-purple-500 "><button>Hello</button></NavLink>
            <NavLink className="btn btn-sm hover:bg-purple-500 btn-outline  text-white bg-purple-500"><button>Hello</button></NavLink>

        </div>
    </>

    return (
        <div className="w-full z-10 fixed  backdrop-blur-lg"
            style={{
                // backgroundImage: `url(${bg})`,
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
                    <div className="flex items-center">
                        <Link to={'/'}><img className="w-16" src={logo} alt="" /></Link>
                        <Link to={'/'} className="text-xl font-bold cursor-pointer">Job Portel</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div>
                        {
                            user ? <div className="flex flex-col justify-center items-center">
                                <img title={user.displayName} className="w-12 rounded-full border-2" src={user?.photoURL} alt="" />
                                <div>
                                    {
                                        user ? <h1 className="text-white">{user.displayName}</h1> : <p></p>
                                    }
                                </div>
                            </div> : <div ><img className="w-[50px] h-[50px] rounded-full cursor-pointer" src="https://i.postimg.cc/yxBM0XS4/user.png" alt="" /></div>
                        }
                    </div>

                    {
                        user ? <button onClick={handaleSingOut} className="btn btn-sm btn-outline text-white">singOut</button> : <Link to={'/login'} className="btn btn-sm btn-outline text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;