

const Banner = () => {
    return (

            <div className="flex gap-16 mt-10 mb-32 w-[80%] mx-auto">
                <div className="banner-details">
                <h2 className="text-[#1A1919] text-[80px] leading-[100px]">One Step <br />
                 Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span></h2>
                <p className="text-[18px] text-[#757575] mt-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="text-[20px] text-[#FFF] px-4 py-2 bg-[#7E90FE] border rounded-xl mt-[24px]">Get Started</button>
                </div>
                <div className="banner-logo">
                <img src="../../../public/assets/images/user.png" alt="banner-image"/>
                </div>
            </div>

    );
};

export default Banner;