import Input from "../Input/Input"

import './about.css'

function HowItWorks() {
    return (
        <>
            <div className="p-4 mb-5">
                <p className="text-3xl uppercase custom-hiw-title text-center mb-3">How it works</p>
                <p className="mb-3">Copy and paste the link of the Youtube video you would like to check the rating of into the search bar below. If the video is in our database, you will be automatically redirected
                    to the stats page. If the video is not in our database, you will be asked if you would like to add it.</p>

                <p><span className="custom-span">Note:</span> Anyone can search and view video ratings, however only users with accounts are able to rate a video.</p>
            </div>
            <Input />

            <div className=" hidden md:card bg-base-300 text-base-content mt-5 mb-10 p-10">
                <div className="card-body">
                    <h5 className="card-title">About IIVDb</h5>
                    <p> The International Internet Video Database (IIVDb) exist to fill a need left by Youtube when it decided to permanently make dislikes invisible to general users. For many,
                        the like/dislike ratio was an important metic to judge the value of a video and was a particularly important value to consider on videos claiming to have some authoritative
                        knowledge, such as tutorial videos. Users can no longer judge the general sentiment of a video thanks to Youtube's poor business decision that ONLY benefits legacy media on the
                        platform and Youtube itself. IIVDb is here to fill this need and give users back their vote so their voice can be heard in the public domain.

                    </p>
                    <h5 className="card-title">How it Works:</h5>
                    <p className="card-text">1. Copy and paste video url from youtube into search bar above.</p>
                    <p className="card-text">2. If the video already exists in our database, you will be redirected to the analytics page where you
                        can like or dislike the video and view anlytics from other IIVDb users. If the video does not yet exist in our database, you will be asked if you want to add it to. You
                        may choose to accept or decline, if you choose to accept, video information will automatically be populated from Youtube and you will be immediately
                        redirected to the analytics page and the video you added will now be in the database!</p>
                    <p className="card-text">NOTE: Anyone can add videos to our database as well as view video analytics, however you must be singed in to contribute to likes or dislikes.</p>
                </div>
            </div>
        </>
    )
}

export default HowItWorks