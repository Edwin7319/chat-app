import {applyMiddleware, compose, createStore} from 'redux';
import principalReducer from '../reducer/principal-reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose();

const store = createStore(
    principalReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ),
);

export default store;
