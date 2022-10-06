import React from 'react'
import SponsoredVideos from '../sponsoredVideos/SponsoredVideos'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'

const Videos = () => {

    const videos = useSelector((state) => state.videos)
    const sponsored = videos.filter((video) => video.sponsored)

    return (
        <div className='container '>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    sponsored.map((video) => (
                        <SponsoredVideos video={video} key={video.id} />
                    ))
                    // videos.map((video) => (
                    //     <SponsoredVideos video={video} key={video.id} />
                    // ))
                }
            </div>
        </div>
    )
}


export default Videos