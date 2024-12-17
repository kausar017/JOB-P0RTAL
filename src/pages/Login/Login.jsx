import Lottie from 'lottie-react';
import bg from '../../assets/cool-background.svg'
import loginLotty from '../../assets/Lottify/login.json'
import { useContext } from 'react';
import Authcontext from '../../Authentication/context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigat = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const { singIn, googleLogin } = useContext(Authcontext)

    const validatePassword = (password) => {
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;
        const lengthPattern = /.{6,}/;

        if (!uppercasePattern.test(password)) {
            return Swal.fire("Password must contain at least one uppercase letter.");

        }
        if (!lowercasePattern.test(password)) {
            return Swal.fire("Password must contain at least one lowercase letter.");

        }
        if (!lengthPattern.test(password)) {
            return Swal.fire("Password must be at least 6 characters long.");

        }

    }

    const handaleSIngIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if (email?.length < 12) {
            return Swal.fire("Your Email Must be more than 12 characters long.");
        }
        const password = form.password.value;
        if (validatePassword(password)) {
            return
        }
        console.log(email, password);

        singIn(email, password)
            .then(res => {
                console.log(res);
                const user = { email: res.user.email }
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => console.log(res.data))
                Swal.fire('Login Succesfully')
                form.reset()
                // navigat(from)
            })
            .catch(error => {
                console.log(error)
                Swal.fire('login not succesfully try again later')
                form.reset()
            })
    };

    const handaleGoogleLogin = () => {
        googleLogin()
            .then(data => {
                navigat(from);
                Swal.fire('google Login Succesfully', data)

            })
    }

    return (
        <div >
            <div className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // height: "100vh",
                    width: "100%",

                }}>
                <div className="container mx-auto md:flex items-center p-3 justify-around py-[110px]">
                    <div className='space-y-4'>
                        <h1 className="text-5xl text-center font-bold max-sm:text-white p-1">Login now!</h1>
                        <Lottie className='max-w-96 max-sm:p-5' animationData={loginLotty}></Lottie>
                    </div>

                    <div className='card backdrop-blur-lg border-2 md:w-96 shrink-0  max-sm:m-3'>
                        <h1 className="text-5xl text-center font-bold text-white p-1">Login</h1>
                        <form onSubmit={handaleSIngIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover lg:text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex gap-3 justify-center items-center'>
                                <Link onClick={handaleGoogleLogin} className='btn btn-sm btn-outline hover:bg-pink-500'>Google Login</Link>
                                <button className='btn btn-sm btn-outline hover:bg-rose-500'>Github Login</button>
                            </div>
                        </form>
                        <div className="ml-4 my-4 lg:text-white text-center">
                            New to this Website? please<Link className="ml-2 font-semibold underline hover:text-red-500" to={'/register'}>Reagister</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;