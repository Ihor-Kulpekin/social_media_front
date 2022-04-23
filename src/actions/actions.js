import {ActionTypes} from "../constants/ActionTypes";

export const loginSuccess = (payload) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload
})

export const refreshToken = (payload) => ({
    type: ActionTypes.REFRESH_TOKEN,
    payload
})

export const logout = () => ({
    type: ActionTypes.LOGOUT,
})
