import firebase from "firebase/app";

import auth from "../../fireBase"
import {LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actionsType";

export const login = () => async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST,
        })

        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

        const res = await auth.signInWithPopup(provider);

        const accessToken = res.credential.accessToken;

        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture
        };

        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("user", JSON.stringify(profile));

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        });

        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })
    } catch (error) {
        console.log(error.message);

        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
    }
};

export const log_out =() =>async dispath=>{
    await auth.signOut()
    dispath({
        type:LOG_OUT,

    })

    sessionStorage.removeItem("accessToken")
    sessionStorage.removeItem("user")
}

