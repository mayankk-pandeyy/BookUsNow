import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import Loader from "../components/Loader"
import { FaLocationDot } from "react-icons/fa6";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode } from 'swiper/modules';

function Recommendation(){

    const [recommendedEvents, setRecommendedEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    const API = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";

    async function fetchData(){
        setLoading(true);
        const response = await fetch(API);
        const output = await response.json();
        setRecommendedEvents(output);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    }, [])

    const [swiperRef, setSwiperRef] = useState(null);

    return(
        <div className="w-10/12 mx-auto mt-2">
            {/* Top */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 font-semibold">
                    Recommended shows
                    <FaArrowRightLong />
                </div>
                <div className=" underline text-sm">
                    See all
                </div>
            </div>
            {/* Bottom Swiper */}
            <div>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {
                        loading === true ? (<Loader/>) : 
                        (
                            recommendedEvents.events.map((event, index)=>{
                                let urlSplit = event.imgUrl.split('/');
                                let id = urlSplit[5];
                                return (
                                    <div>
                                        <SwiperSlide className="relative">
                                            <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} alt="img" className="rounded-lg"/>
                                            <div className="absolute bottom-3 px-6 pb-3 w-full text-white">
                                                <div className="flex justify-between items-center">
                                                    <p className=" text-lg font-semibold">Make Agree</p>
                                                    <p className=" text-sm">March 23, 2024</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <FaLocationDot />
                                                        </div>
                                                        <p className=" text-sm">West Douglas</p>
                                                    </div>
                                                    <div className=" text-xs">
                                                        Snowy, 26°C | 42Km
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                );
                            })
                        )
                    }
                </Swiper>
            </div>
        </div>
    );


}

export default Recommendation;