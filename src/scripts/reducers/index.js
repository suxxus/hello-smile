import * as TYPES from 'scripts/constants';
import { combineReducers } from 'redux';

const view = function setViewReducer( state = '', action ) {
    if (action.type === TYPES.CHANGE_VIEW) {
        return action.payload;
    }
    return state;
};

const userName = function userNameReducer( state = '', action ) {
    if (action.type === TYPES.USER_NAME) {
        return action.payload;
    }
    return state;
};

const rootReducer = combineReducers({ view, userName });

export {
    view,
    userName,
    rootReducer
};
