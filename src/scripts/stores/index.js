/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]*/

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'scripts/reducers';
import { logger } from 'scripts/middlewares';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default () => createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
