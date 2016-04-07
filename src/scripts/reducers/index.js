import { assoc, mapObjIndexed, pipe, always, is, or, F, ifElse } from 'ramda';


export const setViews = (views, view) => {

    const allToFalse = F,
        viewIsDefined = is(String),
        setViewsProp = () => pipe(mapObjIndexed(allToFalse), assoc(view, true))(views),
        defaultState = always(views),

        result = ifElse(
            viewIsDefined,
            setViewsProp,
            defaultState
        )(view);

    return result;
};

export const setName = (actualName, nextName) => or(nextName, actualName);

export const greetApp = (state, action) => ({
    name: setName(state.name, action.name),
    views: setViews(state.views, action.show)
});
