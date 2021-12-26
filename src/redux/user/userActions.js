import {signIn, auth} from '../../firebase/firebaseAuth';
import {userActionTypes} from '../user/userActionTypes';


export const userLogin = () => {
    return (dispatch, getState) => {
        signIn()
        .then((user) => {
            dispatch({
                type: userActionTypes.USER_LOGIN,
                payload: user 
            });
        })
        .catch((err) => {
            dispatch({
                type: 'USER_LOGIN_ERROR',
                payload: err
            });
        })
    }
}

export const userLogout = () => {
    return (dispatch) => {
        auth.signOut()
        .then(() => {
            dispatch({
                type: userActionTypes.USER_LOGOUT
            });
        });
    }
}
