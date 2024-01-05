import { createContext } from "preact";
import { ILogin, ITokens, IUser } from "../login/interfaces";
import { Reducer, useContext, useReducer } from "preact/hooks";
import { removeTokens, removeUserInfoInLocal, saveTokens, saveUserInfoToLocal } from "../../utils/func";
import axios from "axios";

export const AuthContext = createContext<{
    isAuthenticated: boolean
    user: IUser | null
    tokens: ITokens | null
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}>({
    isAuthenticated: false,
    user: null,
    tokens: null,
    login: () => Promise.resolve(),
    logout: () => {}
});

export type AuthAction = | {type: 'LOGIN'; user: IUser, tokens: ITokens} | {type: 'LOGOUT'}

const authReducer: Reducer<{
    isAuthenticated: boolean
    user: IUser | null
    tokens: ITokens | null
}, AuthAction> = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            saveUserInfoToLocal(action.user);
            saveTokens(action.tokens);
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            }
        case "LOGOUT":
            removeUserInfoInLocal()
            removeTokens()
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}

export const AuthProvider = ({children}: {children: any}) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
        tokens: null,
    });

    const login = async (username: string, password: string) => {
        const res = await axios.post('http://localhost:3000/auth/login', {
          username,
          password,
        });
        const data: ILogin = res.data;
        dispatch({type: 'LOGIN', user: data.user, tokens: data.tokens});
    }

    const logout = async () => {
        dispatch({type: 'LOGOUT'});
    }

    return(
        <AuthContext.Provider value={{
            ...state,
            login,
            logout
        }}> 
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);