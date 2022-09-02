export default function video(video = [], action) {
    switch (action.type) {
        case 'FIND_VIDEO':
            return action.payload
        case 'RESET':
            return action
        default: return video
    }
}