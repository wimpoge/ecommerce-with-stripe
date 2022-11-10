import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import './auth.styles.scss'

const Auth = () => {

    return (
        <div className="auth-container">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default Auth;