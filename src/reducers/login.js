export default function login(state = false, action) {
    switch (action.type) {
        case 'LOGIN_OPEN':
            return state = true
        case 'LOGIN_CLOSE':
            return state = false
        default:
            return state
    }

}