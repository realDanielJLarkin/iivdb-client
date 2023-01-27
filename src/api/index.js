import axios from 'axios'

const url = process.env.REACT_APP_AXIOS_RAILWAY
const API = axios.create({ baseURL: url })

export const fetchVideos = () => API.get('/videos')
export const getVideo = (id) => API.get(`/videos/${id}`)
export const createVideo = (newVideo) => API.post('/videos', newVideo)
export const updateViews = (id, views) => API.put(`/videos/${id}`, { mode: "updateViews", views: views })
export const updateLikes = (id, uid, likes) => API.put(`videos/${id}`, { mode: "updateLikes", userId: uid })
export const updateDislikes = (id, uid, dislikes) => API.put(`videos/${id}`, { mode: 'updateDislikes', userId: uid })

export const removeDislike = (id, uid) => API.put(`videos/${id}`, { mode: 'removeDislike', userId: uid })
export const removeLike = (id, uid) => API.put(`videos/${id}`, { mode: 'removeLike', userId: uid })
//export const updateViews = (id, views) => API.patch(`/videos/${id}`, { views: views })
