import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../../context/user"
import { signOutUser } from "../../utils/firebase/firebase"
import CartIcon from "../../components/cart-icon/cart-icon"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown"
import { CartContext } from "../../context/cart"

const Nav = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)



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
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link to='/auth' className='nav-link'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default Nav