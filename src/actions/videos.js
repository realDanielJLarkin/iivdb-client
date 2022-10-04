import axios from 'axios'
import * as api from '../api'

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

export const getVideos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchVideos()
        dispatch({ type: 'FETCH_TOP', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createVideo = (video) => async (dispatch) => {
    try {
        const { data } = await api.createVideo(video)
        dispatch({ type: 'CREATE', payload: data })
        // redirect to video page
    } catch (error) {
        console.log(error.message)
    }
}

export const findVideo = (id) => async (dispatch) => {
    try {
        const { data } = await api.getVideo(id)

        return data[0]
    } catch (error) {
        console.log(error)
    }
}

export const updateViewCount = async (videoID) => {
    try {
        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoID}&key=${apiKey}`)
        const views = data.items[0].statistics.viewCount

        // api.updateViews(videoID, views)
        return views
    } catch (error) {
        console.log('error updating views', error)
    }
}

// export const updateViewCount = async (videoID) => {
//     try {
//         const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoID}&key=${apiKey}`)
//         const data = await res.json()
//         const views = data.items[0].statistics.viewCount

//         // api.updateViews(videoID, views)
//         return views
//     } catch (error) {
//         console.log(error)
//     }

// }

export const checkUser = async (id, uid) => {
    const { data } = await api.getVideo(id)
    if (data[0].liked.includes(uid)) {
        return 'user liked'
    } else if (data[0].disliked.includes(uid)) {
        return 'user disliked'
    } else {
        return 'no factor'
    }
}

export const swap = async (videoId, uid, type) => {
    if (type === 'addLike') {
        api.removeDislike(videoId, uid)
    } else if (type === 'addDislike') {
        api.removeLike(videoId, uid)
    }
}

export const updateLikes = async (videoID, uid) => {
    console.log(`inside actions vID ${videoID}, uID ${uid}`)
    api.updateLikes(videoID, uid)
}

export const updateDislikes = async (videoID, uid) => {
    console.log('update dislikes inside actions')
    api.updateDislikes(videoID, uid)
}

export const getMetrics = async (videoID) => {
    try {
        const { data } = await api.getVideo(videoID)
        const metrics = { likes: data[0].likes, dislikes: data[0].dislikes }

        return metrics
    } catch (error) {
        console.log('error getting metrics', error)
    }
}
