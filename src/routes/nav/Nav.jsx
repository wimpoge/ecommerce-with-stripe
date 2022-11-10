import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../../context/user"
import { signOutUser } from "../../utils/firebase/firebase"

const Nav = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className='nav-link'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link to='/auth' className='nav-link'>
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav