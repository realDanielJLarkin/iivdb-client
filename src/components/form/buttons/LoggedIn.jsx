import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function LoggedIn() {

    const dispatch = useDispatch()

    const loginClicked = (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_OPEN' })

    }

    const signupClicked = (e) => {
        e.preventDefault()
        dispatch({ type: 'SIGNUP_OPEN' })
    }
    return (
        <ul className="menu menu-horizontal p-0">
            <li><Link to='#' onClick={loginClicked}>Login</Link></li>
            <li><Link to='#' onClick={signupClicked}>Sign Up</Link></li>
        </ul>
    )
}

export default LoggedIn