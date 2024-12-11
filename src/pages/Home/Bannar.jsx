import bg from '../../assets/cool-background.svg'
const Bannar = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",

        }}>
            <div className='container mx-auto pt-[110px]'>
                hello Bannar
            </div>
        </div>
    );
};

export default Bannar;