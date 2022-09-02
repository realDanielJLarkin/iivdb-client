export default function signup(state = false, action) {
    switch (action.type) {
        case 'SIGNUP_OPEN':
            return state = true
        case 'SIGNUP_CLOSE':
            return state = false
        default:
            return state
    }

}