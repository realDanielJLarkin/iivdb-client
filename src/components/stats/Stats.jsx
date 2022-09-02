import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'

import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
import { updateLikes, updateViewCount, updateDislikes, checkUser, swap, getMetrics } from '../../actions/videos'
import { useAuth } from '../../context/AuthContext'

import { useParams } from 'react-router-dom'


function Stats({ sentLikes, sentDislikes, views, id }) {

    const params = useParams()

    const { currentUser } = useAuth()
    const [updateViews, setViews] = useState(views)

    const [likeDisabled, setLikeDisabled] = useState(true)
    const [dislikeDisabled, setDislikeDisabled] = useState(true)

    const [likes, setLikes] = useState(sentLikes)
    const [dislikes, setDislikes] = useState(sentDislikes)

    useEffect(() => {
        async function fetchViews() {
            const data = await updateViewCount(params.id)
            setViews(data)
        }
        fetchViews()
    }, [])

    useEffect(() => {
        async function metrics() {
            try {
                const { likes, dislikes } = await getMetrics(params.id)
                setLikes(likes)
                setDislikes(dislikes)
            } catch (error) {
                console.log('error getting metrics in stats', error)
            }
        }
        metrics()
    }, [setLikes, setDislikes])



    useEffect(() => {
        if (!currentUser) {
            setLikeDisabled(true)
            setDislikeDisabled(true)
        } else if (currentUser) {
            setLikeDisabled(false)
            setDislikeDisabled(false)
        }
    }, [currentUser])

    useEffect(() => {
        async function check() {
            const status = await checkUser(params.id, currentUser.uid)
            if (status === 'user liked') {
                setLikeDisabled(true)
            } else if (status === 'user disliked') {
                setDislikeDisabled(true)
            } else if (status === 'no factor') {
                return
            }
        }
        if (currentUser) {
            check()
        }
    }, [])

    const likeClicked = () => {
        if (dislikeDisabled) {
            setDislikeDisabled(false)
            if (dislikes > 0) {
                setDislikes(dislikes - 1)
            }
            try {
                const type = 'addLike'
                setLikeDisabled(true)
                setLikes(likes + 1)
                swap(id, currentUser.uid, type)

            } catch (error) {
                console.log(error)
            }
        } else {
            setLikeDisabled(true)
            try {
                setLikes(likes + 1)
                updateLikes(id, currentUser.uid)

            } catch (error) {
                console.log('error setting likes inside stats', error)
            }
        }

    }

    const dislikeClicked = () => {
        if (likeDisabled) {
            setLikeDisabled(false)
            if (likes > 0) {
                setLikes(likes - 1)
            }
            try {
                setDislikes(dislikes + 1)
                const type = 'addDislike'
                setDislikeDisabled(true)
                swap(id, currentUser.uid, type)

            } catch (error) {
                console.log('e1', error)
            }
        } else {
            setDislikeDisabled(true)
            try {
                setDislikes(dislikes + 1)
                updateDislikes(id, currentUser.uid)

            } catch (error) {
                console.log('error updating likes in stats', error)
            }
        }

    }

    return (
        <div className=''>
            <div className="stats w-full shadow ">
                <div className="stat">
                    <div className="stat-title">Views on YouTube</div>
                    <div className="stat-value text-warning"><NumberFormat value={updateViews} displayType={'text'} thousandSeparator={true} /></div>
                </div>
                <div className="stat ">
                    <button className="stat-figure text-success btn btn-ghost" onClick={likeClicked} disabled={likeDisabled}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                    <div className="stat-title ">Total Likes</div>
                    <div className="stat-value text-success">{likes}</div>
                </div>
                <div className="stat">
                    <button className="stat-figure text-error btn btn-ghost" onClick={dislikeClicked} disabled={dislikeDisabled}>
                        <FaRegThumbsDown className='thumb-button text-2xl' id='down' />
                    </button>
                    <div className="stat-title">Total Dislikes</div>
                    <div className="stat-value text-error">{dislikes}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Viewer Sentiment</div>
                    <div className="stat-value">86%</div>
                    <div className="stat-des">Mostly Positive</div>

                </div>
            </div>
        </div>
    )
}

export default Stats