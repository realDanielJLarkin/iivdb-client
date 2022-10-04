import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { findVideo } from '../actions/videos'
import { useAuth } from '../context/AuthContext'

import { updateViewCount } from '../actions/videos'



import Info from '../components/info/Info'
import Vote from '../components/vote/Vote'

import './styles/video.css'



function Video() {

    const dispatch = useDispatch()
    const params = useParams()
    const data = useLocation((state) => state.video)
    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(true)
    const [video, setVideo] = useState({})
    const [signedIn, setSignedIn] = useState(currentUser)
    const [views, setViews] = useState(0)



    useEffect(() => {
        async function fetchViews() {
            const data = await updateViewCount(params.id)
            setViews(data)
        }
        fetchViews()
    }, [])



    useEffect(() => {
        // checkData(params.id)
        checkData(params.id)
        dispatch({ type: 'NOT_LOADING' })
        setLoading(false)
    }, [])


    const checkData = async (id) => {
        if (data.state) {
            setVideo(data.state.video)
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
                        <Info views={views} likes={video.likes} dislikes={video.dislikes} />
                        <Vote signedIn={signedIn} />
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

