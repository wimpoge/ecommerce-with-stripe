import { Outlet } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutUser } from "../../utils/firebase"
import CartIcon from "../../components/cart-icon/cart-icon"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown"

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"

const Nav = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

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