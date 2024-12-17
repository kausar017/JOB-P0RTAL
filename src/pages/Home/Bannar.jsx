import bg from '../../assets/cool-background.svg'
import { motion } from "framer-motion";
import teme1 from '../../assets/bannar-image/teme1.jpg'
import teme2 from '../../assets/bannar-image/teme2.jpg'
import HotJobs from '../HotJob/HotJobs';
const Bannar = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // height: "100vh",
                    width: "100%",

                }}>
                <div className='container mx-auto lg:flex items-center p-3 justify-around min-h-[800px] pt-[110px]'>
                    <div>
                        <motion.h1 className="text-5xl font-bold text-center lg:text-left max-sm:text-white">Latast <motion.span
                            animate={{ color: ['#ee7007', '#19ee07', '#8207ee'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Job</motion.span> For You!</motion.h1>
                        <p className="py-6 text-center lg:text-left">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="hero">
                        <div className="hero-content">
                            <div className='max-sm:hidden'>
                                <motion.img
                                    animate={{ y: [50, 100, 50] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    src={teme1}
                                    className="max-w-80 h-52 shadow-2xl border-b-8 border-l-8 border-sky-900 rounded-tr-[50px] rounded-tl-[50px] rounded-br-[50px]" />
                                <motion.img
                                    animate={{ x: [100, 150, 100] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    src={teme2}
                                    className="max-w-80 h-52 shadow-2xl border-b-8 border-l-8 border-red-500 rounded-tr-[50px] rounded-tl-[50px] rounded-br-[50px]" />

                            </div>
                            <div className='hidden max-sm:block max-sm:space-y-3'>
                                <img className='rounded-lg' src={teme1} alt="" />
                                <img className='rounded-lg' src={teme2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-base-200'>
                <HotJobs></HotJobs>
            </div>
        </>

    );
};

export default Bannar;