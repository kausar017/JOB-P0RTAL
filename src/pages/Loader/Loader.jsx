import Lottie from 'lottie-react';
import loader from '../../assets/Lottify/loader.json'

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <Lottie className='w-24 ' animationData={loader}></Lottie>
        </div>
    );
};

export default Loader;