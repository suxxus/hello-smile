import test from 'tape';
import state from 'tests/fixtures/state';
import * as TYPES from 'tests/fixtures/constants';
import { view, userName } from 'scripts/reducers';

const before = test;
const after = test;

before('description: reducers', t => {
    t.end();
});

test('set view', t => {

    let actual, expect, msg;

    msg = 'should show splash view';

    actual = view(state.view, {
        type: TYPES.CHANGE_VIEW,
        payload: TYPES.SHOW_SPLASH
    });
    expect = TYPES.SHOW_SPLASH;
    t.equal(actual, expect, msg);

    t.end();
});

test('set name', t => {

    let actual, expect, msg;

    msg = 'name should be Pete';

    const props = {
        type: TYPES.USER_NAME,
        payload: 'Pete'
    };

    actual = userName(state.name, props);
    expect = 'Pete';
    t.equal(actual, expect, msg);

    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
