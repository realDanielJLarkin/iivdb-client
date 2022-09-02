export default (videos = [], action) => {
    switch (action.type) {
        case 'FETCH_TOP':
            return action.payload
        case 'CREATE':
            return [...videos, action.payload]
        default:
            return videos
    }
}