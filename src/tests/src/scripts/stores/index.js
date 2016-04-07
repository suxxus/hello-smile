import test from 'tape';
import mock from 'mock';

import State from 'tests/fixtures/state';
import * as Actions from 'tests/fixtures/actions';
import { greetApp } from 'tests/fixtures/stores/greetApp';

const before = test;
const after = test;

const stores = mock('scripts/stores', {
    'scripts/reducers': {
        greetApp: greetApp
    }
}, require).default;


before('description: stores', t => {
    t.end();
});

test('store.getState', t => {
    const actual = stores(State).getState(),
        expect = State;
    t.deepEqual(actual, expect, 'should return the actual state');
    t.end();
});

test('store.dispatch action userName', t => {

    const store = stores(State);
    store.dispatch(Actions.userName('Sandra'));

    const actual = store.getState(),
        expect = {
            name: 'Sandra',
            views: {
                splash: false,
                greet: false,
                smile: false
            }
        };


    t.deepEqual(actual, expect, 'should set state property name to Sandra');
    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
