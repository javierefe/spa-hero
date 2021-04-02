import { types } from "../types/types";

// si el usuario esta autentificado
// const state = {
//     name: 'Fernando',
//     logged: true
// }


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}