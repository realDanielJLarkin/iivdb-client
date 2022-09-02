import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createVideo, updateViewCount } from '../../actions/videos'
import { useNavigate } from 'react-router-dom'

import '../styles/modal/modal.css'

function Modal() {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const thumbnails = []
    const id = useSelector((state) => state.modal.id)

    const closeModal = () => {
        dispatch({ type: 'MODAL_CLOSE' })
    }

    const handleContinue = () => {
        fetchData(id)
        closeModal()
    }

    const fetchData = async (videoID) => {
        try {
            console.log(videoID)
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoID}&key=${apiKey}`)
            const data = await res.json()
            const thumbnails = data.items[0].snippet.thumbnails
            if ((!('maxres' in thumbnails))) {
                const url = data.items[0].snippet.thumbnails.high.url
                console.log(url)
                setVideoData(data, url)
            } else {
                const url = data.items[0].snippet.thumbnails.maxres.url
                setVideoData(data, url)
            }


        } catch (err) {
            console.log(err)
        }

    }

    const setVideoData = (data, maxresthumbnail) => {
        console.log(data)
        const video = {
            id: data.items[0].id,
            title: data.items[0].snippet.title,
            channel: data.items[0].snippet.channelTitle,
            description: data.items[0].snippet.description,
            thumbnail: data.items[0].snippet.thumbnails.medium.url,
            maxresthumbnail: maxresthumbnail,
            likes: 0,
            dislikes: 0,
            views: data.items[0].statistics.viewCount
        }

        dispatch(createVideo(video))
        navigate(`/videos/${id}`, { state: { video } })
    }


    return (
        <div className="modalBackground ">
            <div className="modalContainer " onClick={(e) => e.stopPropagation()}>
                <div className="modalClose">
                    <button onClick={closeModal}>X</button>
                </div>
                <div className='modalHeader'>
                    <h1 className='text-3xl font-bold'>You're the first!</h1>
                </div>
                <div className="modalBody">
                    <p className='text-2xl font-light'>This video does not yet exist in our database, would you like to add it?</p>
                </div>
                <div className="modalFooter">
                    <button onClick={handleContinue} className='btn btn-primary text-bold'>Yes!</button>
                    <button onClick={closeModal} id='cancel' className='btn'>No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal