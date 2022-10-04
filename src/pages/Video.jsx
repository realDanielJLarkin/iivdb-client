import { useLocation, useParams } from 'react-router-dom'
import { updateViewCount } from '../actions/videos'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import NumberFormat from 'react-number-format'
import Videos from '../components/videos/Videos'
import { findVideo } from '../actions/videos'
import { useNavigate } from 'react-router-dom'

import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'

import './styles/video.css'
import Stats from '../components/stats/Stats'
import Input from '../components/Input/Input'
import SponsoredVideos from '../components/sponsoredVideos/SponsoredVideos'
import Info from '../components/info/Info'
import Vote from '../components/vote/Vote'



function Video() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const location = useLocation()
    const data = useLocation((state) => state.video)
    const [loading, setLoading] = useState(true)
    const [video, setVideo] = useState({})
    const [views, setViews] = useState()
    const [likes, setLikes] = useState()
    const [dislikes, setDislikes] = useState()



    useEffect(() => {
        // checkData(params.id)
        checkData(params.id)
        dispatch({ type: 'NOT_LOADING' })
        setLoading(false)
    }, [])


    const checkData = async (id) => {
        if (data.state) {
            setVideo(data.state.video)
            console.log('test')
            return
        } else {
            const videoData = await dispatch(findVideo(id))
            setVideo(videoData)
            console.log(video)

        }
    }


    // const checkData = () => {
    //     if (data.state) {

    //         setVideo(data.state.video)
    //         // setVideo(data.state.video)
    //         return
    //     } else {
    //         dispatch(findVideo(params.id))
    //             .then((response) => {
    //                 if (response) {
    //                     setVideo(response)
    //                 } else if (!response) {
    //                     navigate('/notfound')
    //                 }
    //             })
    //     }
    // }

    const upClicked = () => {
        console.log('up')
    }

    const downClicked = () => {
        console.log('down')
    }

    return (
        <>
            {/* <Input /> */}
            {!loading &&
                <div className="flex max-w-4xl flex-col text-center">
                    <h1 className='sentiment-meter mt-10'>82% - Mostly Positive</h1>
                    <div className='card text-left shadow-2xl mt-10 mb-10'>
                        <figure className='px-10 pt-10'>
                            <img src={video.maxresthumbnail} alt="" height={1000} width={1000} />
                        </figure>
                        <div className="card-body px-10">
                            <h2 className='card-title'>{video.title}</h2>
                            <p className='card-title'>- {video.channel}</p>
                        </div>
                        <Info views={video.views} likes={video.likes} dislikes={video.dislikes} />
                        <Vote />

                    </div>


                    {/* <div className="card text-center shadow-2xl mt-20 mb-20">
                        <figure className="px-10 pt-10">
                            <img src={video.maxresthumbnail} className="rounded-xl" height={1000} width={1000} />
                        </figure>
                        <div className="card-body px-10 ">
                            <h2 className="card-title">{video.title}</h2>
                            <p className='card-title'>{video.channel}</p>
                        </div>
                        <Stats sentLikes={video.likes} sentDislikes={video.dislikes} sentViews={video.views} id={video.id} />
                    </div>
                    <div>

                    </div> */}
                </div>
            }
        </>
    )
}
export default Video


{/* <div className="container">
<div className="row">
    <div className="col-md">
        <div className="card mb-3">
            <img className="card-img-top" src={video.res.thumbnail} alt="Card image cap" />
            <div className="card-body">

                <div className="row">
                    <div className="col-lg">
                        <h5 className="card-title">{video.res.title}</h5>
                        <div className="row">
                            <NumberFormat className='views' value={views} displayType={'text'} thousandSeparator={true} suffix={' views'} />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="progress">
                            <div className="progress-bar custom-pg-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className='button-container'>
                            <p>{video.res.likes}</p><button className='btn btn-primary' onClick={upClicked}><FaRegThumbsUp className='thumb-button' id='up' /></button>
                            <p>{video.res.dislikes}</p><button className='btn btn-danger' onClick={downClicked}><FaRegThumbsDown className='thumb-button' id='down' /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="col-sm">
        <h1>Sponsored</h1>

    </div>
</div>

</div > */}

