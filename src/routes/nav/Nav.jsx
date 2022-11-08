import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'

const Nav = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className='nav-link'>
                        SHOP
                    </Link>
                    <Link to='/sign-in' className='nav-link'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav