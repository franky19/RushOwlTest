import { Dispatch } from "redux";
import { ILogin } from "../../interface/IAuth";
import { loginAPI } from "../api/api.auth";
import * as types from '../types/auth.type'

export const loginAction = (payload: ILogin) => {
    return async (dispatch: Dispatch) => { // Use Dispatch type
        try {
            const response = await loginAPI(payload);
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: {
                    token: response.data.token,
                }
            });
        } catch (err) {
            console.error('[loginAction]', err);
            throw err;
        }
    };
};