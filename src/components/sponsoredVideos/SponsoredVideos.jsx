import React from 'react'
import { useNavigate } from "react-router-dom"

function SponsoredVideos({ video }) {
    const navigate = useNavigate()

    const handleClick = () => {
        // const res = video
        // navigate(`/videos/${video.id}`, { state: { video } })
        navigate(`/videos/${video.id}`, { state: { video } })

    }

    return (
        <div className=''>
            <div className="card lg:card-side  mb-10 ">
                <figure className=''>
                    <img src={video.thumbnail} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{video.title}</h2>
                    <p className='mb-10'>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                    <div className="card-actions">
                        <button className="btn btn-warning" onClick={handleClick}>Show Stats</button>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-ghost">Watch on Youtube</a>
                    </div>
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