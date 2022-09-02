export default function modal(state = { value: false, id: '' }, action) {
    switch (action.type) {
        case 'MODAL_OPEN':
            return state = { value: true, id: action.payload }
        case 'MODAL_CLOSE':
            return state = false
        default:
            return state
    }
}