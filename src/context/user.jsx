import { createContext, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase";
import { createAction } from "../utils/reducer/reducer";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
        throw new Error(`Unhandled type ${type} in userReducer`)
    }
}



export const UserProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const {currentUser} = state
    console.log(currentUser)
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }

    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)

        })
        return unsubscribe

    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}