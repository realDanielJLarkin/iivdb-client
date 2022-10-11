import React from 'react'
import SponsoredVideos from '../sponsoredVideos/SponsoredVideos'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import Spinner from '../spinner/Spinner'

const Videos = () => {


    const loading = useSelector((state) => state.loading)
    const videos = useSelector((state) => state.videos)
    const sponsored = videos.filter((video) => video.sponsored)



    return (
        <div className='container '>

            {!loading ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {
                        sponsored.map((video) => (
                            <SponsoredVideos video={video} key={video.id} />
                        ))

                    }
                </div> : <div className='flex items-center justify-center'>
                    <Spinner />
                </div>
            }
        </div>
    )
}


export default Videos