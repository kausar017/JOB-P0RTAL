import Lottie from 'lottie-react';
import error from '../../assets/Lottify/error.json'
const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <p className="text-5xl font-bold">Opss!! Data Not Found</p>
            <p className="text-4xl font-bold text-red-600">404</p>
            <Lottie className='w-60' animationData={error}></Lottie>
        </div>
    );
};

export default Error;