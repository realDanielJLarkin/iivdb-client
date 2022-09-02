import React from 'react'
import { useAuth } from '../context/AuthContext'

import Videos from '../components/videos/Videos'
import About from '../components/about/About'

function Home() {
    return (
        <div>
            <About />
            <h1 className="text-3xl font-bold">Sponsored</h1>
            <Videos />
        </div>
    )
}

export default Home