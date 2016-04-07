import test from 'tape';
import deepFreeze from 'deep-freeze';
import State from 'tests/fixtures/state';
import * as TYPES from 'tests/fixtures/constants';
import * as reducers from 'scripts/reducers';

const before = test;
const after = test;


before('description: reducers', t => {
    t.end();
});

test('setViews', t => {

    let actual, expect, nextState;

    const state = State.views;
    nextState = deepFreeze({
        splash: false,
        greet: false,
        smile: true
    });


    actual = reducers.setViews(state, TYPES.SHOW_SMILE);
    expect = nextState;
    t.deepEqual(actual, expect, 'should set smile value = true');


    nextState = deepFreeze({
        splash: false,
        greet: false,
        smile: false
    });

    actual = reducers.setViews(State.views);
    expect = nextState;
    t.deepEqual(actual, expect, 'should return default state');

    t.end();
});

test('setName', t => {

    const state = deepFreeze(Object.assign({}, State, { name: 'Lina' }));

    let actual, expect;

    actual = reducers.setName(state.name, undefined);
    expect = 'Lina';
    t.equal(actual, expect, 'should return Lina');

    actual = reducers.setName(state.name, 'Alison');
    expect = 'Alison';
    t.equal(actual, expect, 'should return Alison');

    t.end();
});

test('greetApp', t => {

    let actual, expect, nextState;

    nextState = deepFreeze(Object.assign({}, State, {
        views: {
            splash: false,
            greet: true,
            smile: false
        }
    }));

    actual = reducers.greetApp(State, { type: TYPES.CHANGE_VIEW, show: TYPES.SHOW_GREET });
    expect = nextState;
    t.deepEqual(actual, expect, 'should set state views.greet value = true');


    nextState = deepFreeze(Object.assign({}, State, { name: 'Cesar' }));

    actual = reducers.greetApp(State, { type: TYPES.USER_NAME, name: 'Cesar' });
    expect = nextState;
    t.deepEqual(actual, expect, 'should set state name value = Cesar');

    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
