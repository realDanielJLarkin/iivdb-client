import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createVideo } from '../../actions/videos'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { findVideo } from '../../actions/videos'


function Input() {

    const dispatch = useDispatch()
    const location = useLocation()
    const [videoUrl, setVideoUrl] = useState({ url: '' })
    const [video, setVideo] = useState({})
    const navigate = useNavigate()



    const setLoading = (value) => {
        dispatch({ type: value })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        checkUrl(videoUrl.url)
    }

    const checkUrl = (url) => {
        if (url) {
            if (url.includes('v=') && url.includes('youtube.com')) {
                const videoId = url.slice(20)
                console.log(videoId)
                checkDatabase(videoId)
            } else {
                console.log('invalid')
            }
        } else {
            console.log('no text')
        }
    }

    const checkDatabase = (videoID) => {
        setLoading('LOADING')
        try {
            dispatch(findVideo(videoID))
                .then((response) => {
                    if (response) {
                        const video = response
                        navigate(`/videos/${videoID}`, { state: { video }, replace: true })

                    } else {
                        setLoading('NOT_LOADING')
                        setVideoUrl({ url: '' })
                        dispatch({ type: 'MODAL_OPEN', payload: videoID })
                    }
                })
            // const res = await fetch(`http://localhost:5000/videos/${videoID}`)
            // const data = await res.json()
            // if (data[0] !== undefined) {
            //     const video = data[0]
            //     navigate(`/videos/${videoID}`, { state: { video } })
            // } else {
            //     dispatch({ type: 'NOT_LOADING' })
            //     console.log(videoID)
            //     dispatch({ type: 'MODAL_OPEN', payload: videoID })
            // }
        } catch (err) {
            setLoading('NOT_LOADING')
            console.log(err, 'error searching database')
        }
    }

    // const foundVideo = (data) => {
    //     const video = {
    //         id: data[0].id,
    //         title: data[0].title,
    //         channel: data[0].channel,
    //         description: data[0].description,
    //         thumbnail: data[0].thumbnail,
    //         likes: data[0].likes,
    //         dislikes: data[0].dislikes
    //     }
    //     console.log(video)
    // }

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className="form-control mb-20">
            <div className="relative">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setVideoUrl({ url: e.target.value })} placeholder="Enter Youtube Video URL" class="ml-8 w-50 pr-16 input input-danger input-bordered rounded-r-none md:rounded-r md:w-full md:ml-0" />
                    <button className=" top-0 right-0 rounded-l-none btn btn-warning md:absolute" type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Input

// 