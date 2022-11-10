import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import './sign-up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const {setCurrentUser} = useContext(UserContext)

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("password do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            setCurrentUser(user)

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            } else {
                console.log(error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign Up</span>

            <form onSubmit={handleSubmit}>
                <FormInput required label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput required label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput required label="Password" type="password" onChange={handleChange} name="password" value={password} />
                <FormInput required label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button buttonTypes='inverted' type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUp;