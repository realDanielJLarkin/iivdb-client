import Input from "../Input/Input"

import './about.css'

function HowItWorks() {
    return (
        <>
            <div className="p-4 mb-5 md:hidden">
                <p className="text-3xl uppercase custom-hiw-title text-center mb-3">How it works</p>
                <p className="mb-3">Copy and paste the link of the Youtube video you would like to check the rating of into the search bar below. If the video is in our database, you will be automatically redirected
                    to the stats page. If the video is not in our database, you will be asked if you would like to add it.</p>

                <p><span className="custom-span">Note:</span> Anyone can search and view video ratings, however only users with accounts are able to rate a video.</p>
            </div>
            <Input />

            <div className=" hidden md:card bg-base-300 text-base-content mt-5 mb-10 p-10">
                <div className="card-body">
                    <h5 className="card-title">How it Works:</h5>
                    <p className="mb-3">Copy and paste the link of the Youtube video you would like to check the rating of into the search bar above. If the video is in our database, you will be automatically redirected
                        to the stats page. If the video is not in our database, you will be asked if you would like to add it.</p>
                    <p><span className="custom-span">Note:</span> Anyone can search and view video ratings, however only users with accounts are able to rate a video.</p>
                </div>
            </div>
        </>
    )
}

export default HowItWorks