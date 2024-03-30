import { FaArrowRightLong } from "react-icons/fa6";
import Loader from "./Loader";
import { useState } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";


function Upcoming(){
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNum, setPageNum] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const API = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNum}&type=upcoming`;


    function fetchNewData(){
        {
            pageNum <= 4? (setPageNum(pageNum+1)) : (
                setHasMore(false)
            )
        }
        async function fetchData(){
            setLoading(true);
            const response = await fetch(API);
            const output = await response.json();
            setLoading(false);
            setUpcomingEvents(upcomingEvents.concat(output.events));
        }
        fetchData();
    }

    return(
        <div className="w-10/12 mx-auto mt-2">
            {/* Top */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 font-semibold">
                    Upcoming events
                    <FaArrowRightLong />
                </div>
                <div className=" underline text-sm">
                    See all
                </div>
            </div>

            {/* Bottom */}
            <div className="flex justify-between gap-y-6 flex-wrap mt-2">
                {
                    loading === true ? (
                        <div className="w-full flex justify-center items-center h-[200px]">
                            <Loader/>
                        </div>
                    ) : 
                    (
                        upcomingEvents.map((event) => {
                            return (
                                <Card event={event}/>
                            )
                        })
                    )
                }
                {
                    pageNum <= 5 ? (
                        <InfiniteScroll
                            dataLength={upcomingEvents.length}
                            next={fetchNewData}
                            hasMore={hasMore}
                        >
                        </InfiniteScroll>
                    ) : (
                        <div>Thank You</div>
                    )
                }
            </div>
        </div>
    );


}

export default Upcoming;