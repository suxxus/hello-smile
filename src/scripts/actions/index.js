import * as TYPES from 'scripts/constants';

export const userName = name => ({
    type: TYPES.USER_NAME,
    name
});

export const changeView = show => ({
    type: TYPES.CHANGE_VIEW,
    show
});

