import * as TYPES from 'scripts/constants';

const userName = name => ({
    type: TYPES.USER_NAME,
    payload: name
});

const changeView = show => ({
    type: TYPES.CHANGE_VIEW,
    payload: show
});

export {
    userName,
    changeView
};
