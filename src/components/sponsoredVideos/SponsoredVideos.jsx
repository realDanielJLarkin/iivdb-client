import React from 'react'
import { useNavigate } from "react-router-dom"

import './sponsored.css'

function SponsoredVideos({ video, }) {
    const navigate = useNavigate()

    const handleClick = () => {
        // const res = video
        // navigate(`/videos/${video.id}`, { state: { video } })
        navigate(`/videos/${video.id}`, { state: { video } })

    }

    return (
        <div className="card mb-10 custom-card">
            <figure>
                <img src={video.thumbnail} />
            </figure>
            <div className="card-body ml-3 lg:ml-0 lg:px-0">
                <h2 className="card-title mb-3">{video.title}</h2>

                <div className="card-actions flex space-x-4 md:space-x-3">
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" className="btn bg-red-700 border-none">Watch on Youtube</a>
                    <button className="btn btn-ghost" onClick={handleClick}>Show Stats</button>

                </div>
            </div>
        </div>
    )
}

export default SponsoredVideos

{/* <div className='card mb-3 cursor-pointer' onClick={handleClick}>
            <div className='row g-0 '>
                <div className="col-md-4">
                    <img className='img-fluid rounded-start' src={video.thumbnail} alt='thumbnail' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className='card-title'>{video.title}</h5>
                        <p className='card-text'>{video.channel}</p>
                    </div>
                </div>
            </div>
        </div> */}