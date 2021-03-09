import authTypes from '../types/auth-types';

const initialState = {
    logged: false,
}

const authReducer = (state = initialState, action: authTypes) => {
    const {type} = action;
    switch (type) {
        case 'login':
            return {
                ...state,
                logged: true,
            }
        default:
            return state;
    }
}

export default authReducer;
