import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase";
import Button, {BUTTON_TYPE_CLASSES} from "../button/Button";
import FormInput from "../form-input/FormInput";
import './sign-in.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
         await signInWithGooglePopup()
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password')
                    break
                case 'auth/user-not-found':
                    alert("no user found")
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span>Sign In</span>

            <form onSubmit={handleSubmit}>
                <FormInput required label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput required label="Password" type="password" onChange={handleChange} name="password" value={password} />

                <div className="button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonTypes={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;