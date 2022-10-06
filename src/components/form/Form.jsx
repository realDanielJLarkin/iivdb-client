import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createVideo } from '../../actions/videos'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FaSearch } from 'react-icons/fa'

import Input from '../Input/Input'

import logo from '../../centered.png'

import '../styles/form/form.css'
import LoggedIn from './buttons/LoggedIn'
import Logout from './buttons/Logout'

import './form.css'
import './buttons/buttons.css'


function Form() {
    const { currentUser } = useAuth()




    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-center">
                    <Link to='/'><img src={logo} alt="" className='custom-logo' /></Link>

                </div>

            </div>

            {currentUser && <div className="logout-button"><Logout /></div>}

        </>

    )
}

export default Form

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{/* <div className='container zPosition'>
            <div className="container d-flex">
                <div className="row">
                    <div className="col logo-home" onClick={handleClick}>
                        <img src={logo} alt="" srcset="" />
                    </div>
                </div>
                <div className='d-flex align-items-center mx-auto'>
                    <p>Log In</p>
                    <p>Sign Up</p>
                </div>
            </div>
            <div className="row">
                <form className="input-group mb-3 zPosition" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={(e) => setVideoUrl({ url: e.target.value })} placeholder="Enter Youtube URL" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <button className="btn btn-danger" type="submit" id="button-addon2">Search</button>
                </form>
            </div>
        </div > */}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const dispatch = useDispatch()
// const [videoUrl, setVideoUrl] = useState()
// const [id, setId] = useState('')
// const navigate = useNavigate()

// const checkDbUrl = process.env.REACT_APP_CHECK_DB_URL

// const handleSubmit = (e) => {
//     e.preventDefault()
//     const url = videoUrl.url
//     checkUrl(url)
// }

// const checkUrl = (url) => {
//     if (url) {
//         if (url.includes('v=') && url.includes('youtube.com')) {
//             const videoId = url.slice(20)
//             checkDatabase(videoId)
//         } else {
//             console.log('invalid')
//         }
//     } else {
//         console.log('no text')
//     }
// }

// const checkDatabase = async (videoID) => {
//     try {
//         const res = await fetch(`http://localhost:5000/videos/${videoID}`)
//         const { data } = await res.json()
//         if (data[0] !== undefined) {
//             const res = data[0]
//             navigate(`/videos/${videoID}`, { state: { res } })
//         } else {
//             dispatch({ type: 'MODAL_OPEN', payload: videoID })
//         }

//     } catch (err) {
//         console.log(err, 'error searching database')
//     }
// }

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

// const handleClick = () => {
//     navigate('/')
// }

