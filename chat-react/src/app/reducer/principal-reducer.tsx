import {combineReducers, Reducer} from 'redux';
import authReducer from './auth-reducer';

const principalReducer: Reducer = combineReducers(
    {
        auth: authReducer as any,
    }
);

export default principalReducer;
