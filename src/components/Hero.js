import banner from "../assets/Banner.svg"


function Hero(){

    return(
        <div className="mt-2 relative">
            {/* Image */}
            <div className=" object-contain">
                <img src={banner} alt="Banner"/>
            </div>

            {/* Heading */}
            <div className="absolute top-[150px] text-white">
                <div className="text-5xl w-7/12 mx-auto font-semibold leading-snug">
                    Discover Exciting Events Happening Near You - Stay Tuned For Updates!
                </div>
                <div className="w-6/12 mx-auto mt-4">
                    sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id
                </div>
            </div>
        </div>
    );

}

export default Hero;