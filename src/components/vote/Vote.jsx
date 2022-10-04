import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'

import { checkUser, swap, updateLikes, updateDislikes } from '../../actions/videos'

import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

import './vote.css'

function Vote({ signedIn }) {

    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id
    const { currentUser } = useAuth()

    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const onClick = (event) => {
        if (signedIn === null) {
            dispatch({ type: 'LOGIN_OPEN' })
        } else {
            const id = event.currentTarget.id
            if (id === 'like') {
                likedClicked()
            } else {
                dislikedClicked()
            }
        }
    }



    useEffect(() => {
        async function check() {
            const status = await checkUser(params.id, currentUser.uid)
            if (status === 'user liked') {
                setLiked(true)
            } else if (status === 'user disliked') {
                setDisliked(true)
            } else if (status === 'no factor') {
                return
            }
        }
        if (currentUser) {
            check()
        }
    }, [])







    const likedClicked = () => {
        if (disliked) {
            setDisliked(false)
            try {
                const type = 'addLike'
                swap(id, currentUser.uid, type)
                setLiked(true)
            } catch (error) {
                console.log(error)
            }
        } else {
            setLiked(true)
            try {
                updateLikes(id, currentUser.uid)

            } catch (error) {
                console.log('error setting likes inside stats', error)
            }
        }
    }

    const dislikedClicked = () => {
        if (liked) {
            setLiked(false)
            try {
                const type = 'addDislike'
                setDisliked(true)
                swap(id, currentUser.uid, type)
            } catch (error) {
                console.log('e1', error)
            }
        } else {
            setDisliked(true)
            try {
                updateDislikes(id, currentUser.uid)
            } catch (error) {
                console.log('error updating likes in stats', error)
            }
        }
    }

    return (
        <>
            <h2 className='text-3xl mx-auto mt-10 custom-vote-title'>CAST YOUR VOTE:</h2>
            <div className='flex items-center mt-10 mb-10 space-x-10 mx-auto'>
                <div className='btn btn-ghost text-5xl custom-vote-btn p-10 content-center' id='like' onClick={onClick} disabled={liked}>
                    <span className='vote-icon like-button '><FaThumbsUp /></span>
                </div>
                <div className='btn btn-ghost text-5xl custom-vote-btn p-10 content-center' id='dislike' onClick={onClick} disabled={disliked}>
                    <span className='vote-icon dislike-button text-error'><FaThumbsDown /></span>
                </div>
            </div>
        </>
    )
}

export default Vote