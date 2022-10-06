import React from 'react'
import NumberFormat from 'react-number-format'
import Vote from '../vote/Vote'

import './info.css'

function Info({ views, likes, dislikes }) {
    return (
        <div className='md:flex'>
            <div className='custom-stats md:mr-0'>
                <div className='stat-title'>Views on Youtube</div>
                <div className='stat-value custom-stat-value text-gray-600'><NumberFormat value={views} displayType={'text'} thousandSeparator={true} /></div>
            </div>
            <div className='custom-stats flex items-center md:ml-0'>
                <div className='stat'>
                    <h2 className='stat-title'>Total Likes</h2>
                    <h2 className='stat-value custom-stat-value text-green-600'><NumberFormat value={likes} displayType={'text'} thousandSeparator={true} /></h2>
                </div>
                <div className='stat'>
                    <h2 className='stat-title'>Total Dislikes</h2>
                    <h2 className='stat-value custom-stat-value text-red-700'><NumberFormat value={dislikes} displayType={'text'} thousandSeparator={true} /></h2>

                </div>
            </div>

        </div>
    )
}

export default Info