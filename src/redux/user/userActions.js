import {signIn, auth} from '../../firebase/firebaseAuth';
import {userActionTypes} from '../user/userActionTypes';
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig';


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


export const initUser = (userId) => {
    return async (dispatch) => {
        await setDoc(doc(db, "users", userId), {
            todos: [
                {
                    id: '34n23kj',
                    text: 'test',
                    done: false
                }
            ]
        });
    }
}
