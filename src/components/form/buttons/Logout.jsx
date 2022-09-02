import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

function Logout() {
    const { currentUser, logout } = useAuth()

    const logoutClicked = (e) => {
        logout(currentUser.email)
    }

    return (
        <ul className="menu menu-horizontal p-0">
            <li><Link to='#' onClick={logoutClicked}>Logout</Link></li>

        </ul>
    )
}

export default Logout