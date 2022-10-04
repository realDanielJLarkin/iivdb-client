import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'

import './vote.css'

function Vote() {
    return (
        <>
            <h2 className='text-3xl mx-auto mt-10 custom-vote-title'>CAST YOUR VOTE:</h2>
            <div className='flex items-center mt-10 mb-10 space-x-10 mx-auto'>
                <div className='btn btn-ghost text-5xl custom-vote-btn p-10 content-center' >
                    <span className='vote-icon like-button text-success'><FaThumbsUp /></span>
                </div>
                <div className='btn btn-ghost text-5xl custom-vote-btn p-10 content-center'>
                    <span className='vote-icon dislike-button text-error'><FaThumbsDown /></span>
                </div>
            </div>
        </>
    )
}

export default Vote