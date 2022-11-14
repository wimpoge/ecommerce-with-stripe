import { Link, Outlet } from "react-router-dom"
// import './navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useContext } from "react"
import { UserContext } from "../../context/user"
import { signOutUser } from "../../utils/firebase"
import CartIcon from "../../components/cart-icon/cart-icon"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown"
import { CartContext } from "../../context/cart"
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles"

const Nav = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)



    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Nav