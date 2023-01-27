import React from 'react'


import Videos from '../components/videos/Videos'
import About from '../components/about/About'


function Home() {
    return (
        <div>
            <About />
            <h1 className="text-3xl font-bold text-center mb-10">SPONSORED</h1>
            <Videos />
        </div>
    )
}

export default Home