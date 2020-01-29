import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    RETRIEVE_FRIENDS_START,
    RETRIEVE_FRIENDS_SUCCESS,
    RETRIEVE_FRIENDS_FAILURE
} from '../actions';


const initialState = {
    friends: [],
    error: '',
    isLoggedIn: false,
    isLoading: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_START:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                error: action.payload,
                isLoading: false
            }
        case RETRIEVE_FRIENDS_START:
            return {
                ...state,
                isLoading: true
            }
        case RETRIEVE_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isLoading: false
            }
        case RETRIEVE_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    };
};