import * as TYPES from 'tests/fixtures/constants';

export const greetApp = (state, action) => {

    const actions = {
        [TYPES.USER_NAME]: () => action.name
    };

    return ({
        name: actions[action.type] ? actions[action.type]() : state.name,
        views: {
            greet: false,
            smile: false,
            splash: false
        }
    });
};
