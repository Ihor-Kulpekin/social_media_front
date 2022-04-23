import {ActionTypes} from "../constants/ActionTypes";

const defaultState = {
    user: null
};

export default function user(state = defaultState, action) {
    switch(action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case ActionTypes.REFRESH_TOKEN:
            console.log('action.payload refresh',action.payload)
            return {
                ...state,
                user: action.payload
            }
        case ActionTypes.LOGOUT:
            return {
                user: null
            }
        default:
            return state;
    }
};
