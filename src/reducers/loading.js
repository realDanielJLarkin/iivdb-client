export default function loading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return state = true
        case 'NOT_LOADING':
            return state = false
        default:
            return state
    }
}