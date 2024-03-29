import React from 'react'

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-4">The page you are looking for doesn't exist or has been moved.</p>
            <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go back to the home page
            </a>
        </div>
    )
}

export default NotFound