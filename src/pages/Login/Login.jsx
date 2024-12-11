import Lottie from 'lottie-react';
import bg from '../../assets/cool-background.svg'
import loginLotty from '../../assets/Lottify/login.json'

const Login = () => {
    return (
        <div >
            <div className="hero min-h-screen" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",

            }}>
                <div className="container mx-auto md:flex items-center justify-around py-[110px]">
                    <div className='space-y-4'>
                        <h1 className="text-5xl text-center font-bold max-sm:text-white p-1">Login now!</h1>
                        <Lottie className='max-w-96 max-sm:p-5' animationData={loginLotty}></Lottie>
                    </div>

                    <div className='card backdrop-blur-lg border-2 md:w-96 shrink-0  max-sm:m-3'>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover lg:text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;