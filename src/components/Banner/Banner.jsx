import img from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex items-center my-7'>
            <div className="space-y-5">
                <h1 className="text-5xl font-extrabold leading-snug">One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                <p className="text-[#757575] w-1/2">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="text-xl font-extrabold bg-[#9873FF] px-4 py-2 rounded-md text-white" >Get Started</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;