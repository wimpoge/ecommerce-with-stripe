import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return ( 
        <div>
            <button onClick={logGoogleUser}>Sign In</button>
        </div>
     );
}
 
export default SignIn;