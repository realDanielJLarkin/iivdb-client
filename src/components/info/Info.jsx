import React from 'react'
import NumberFormat from 'react-number-format'

import './info.css'

function Info({ views, likes, dislikes }) {
    return (
        <>
            <div className='custom-stats'>
                <div className='stat-title'>Views on Youtube</div>
                <div className='stat-value custom-stat-value text-warning'><NumberFormat value={views} displayType={'text'} thousandSeparator={true} /></div>
            </div>
            <div className='custom-stats flex items-center'>
                <div className='stat'>
                    <h2 className='stat-title'>Total Likes</h2>
                    <h2 className='stat-value custom-stat-value text-success'><NumberFormat value={likes} displayType={'text'} thousandSeparator={true} /></h2>
                </div>
                <div className='stat'>
                    <h2 className='stat-title'>Total Dislikes</h2>
                    <h2 className='stat-value custom-stat-value text-error'><NumberFormat value={dislikes} displayType={'text'} thousandSeparator={true} /></h2>
                </div>
            </div>

        </>
    )
}

export default Info