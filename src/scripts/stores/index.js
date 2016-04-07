import { createStore } from 'redux';
import { greetApp } from 'scripts/reducers';


export default (initialState = {}) => createStore(greetApp, initialState);

