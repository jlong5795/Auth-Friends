import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const RETRIEVE_FRIENDS_START = 'RETRIEVE_FRIENDS_START';
export const RETRIEVE_FRIENDS_SUCCESS = 'RETRIEVE_FRIENDS_SUCCESS';
export const RETRIEVE_FRIENDS_FAILURE = 'RETRIEVE_FRIENDS_FAILURE';

export const CREATE_FRIEND_START = 'CREATE_FRIEND_START';
export const CREATE_FRIEND_SUCCESS = 'CREATE_FRIEND_SUCCESS';
export const CREATE_FRIEND_FAILURE = 'CREATE_FRIEND_FAILURE';

export const login = data => {
    return dispatch => {
        dispatch({ type: USER_LOGIN_START });
         axios
        .post('http://localhost:5000/api/login', data)
        .then(response => {
            console.log(response.data);
            dispatch({ type: USER_LOGIN_SUCCESS});
            localStorage.setItem('token', response.data.payload);
        })
        .catch(error => {
            dispatch({ type: USER_LOGIN_FAILURE, payload: error.data});
            console.log(error);
        });
    };
};

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: RETRIEVE_FRIENDS_START })
        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
            dispatch({ type: RETRIEVE_FRIENDS_SUCCESS, payload: response.data})
            console.log(response.data);
        })
        .catch(error => {
            dispatch({ type: RETRIEVE_FRIENDS_FAILURE, payload: error.data})
            console.log(error);
        })

    }
    
};

export const createFriend = data => {
    return dispatch => {
        dispatch({ type: CREATE_FRIEND_START})
        axiosWithAuth()
            .post('/api/friends', {name: data.name, age: Number(data.age), email: data.email})
            .then(response => {
                dispatch({ type: CREATE_FRIEND_SUCCESS, payload: response.data})
                console.log('Create new friend', response);
                
            })
            .catch(error => {
                dispatch({ type: CREATE_FRIEND_FAILURE, payload: error.data})
                console.log(error);
            })
    }
}