import { KEY_COOKIES, KEY_LOCAL_STORE } from "../modules/login/constants";
import { ITokens, IUser } from "../modules/login/interfaces";
import Cookies from "js-cookie";

export function saveUserInfoToLocal(user: IUser){
    localStorage.setItem(KEY_LOCAL_STORE.ID_USER, user._id);
    localStorage.setItem(KEY_LOCAL_STORE.NAME_USER, user.name);
    localStorage.setItem(KEY_LOCAL_STORE.EMAIL, user.email);
    localStorage.setItem(KEY_LOCAL_STORE.GENDER, user.gender);
}

export function removeUserInfoInLocal(){
    localStorage.removeItem(KEY_LOCAL_STORE.ID_USER);
    localStorage.removeItem(KEY_LOCAL_STORE.NAME_USER);
    localStorage.removeItem(KEY_LOCAL_STORE.EMAIL);
    localStorage.removeItem(KEY_LOCAL_STORE.GENDER);
}

export function saveTokens(tokens: ITokens){
    Cookies.set(KEY_COOKIES.ACCESS_TOKEN, tokens.accessToken);
    Cookies.set(KEY_COOKIES.REFRESH_TOKEN, tokens.refreshToken);
}

export function removeTokens(){
    Cookies.remove(KEY_COOKIES.ACCESS_TOKEN);
    Cookies.remove(KEY_COOKIES.REFRESH_TOKEN);
}
