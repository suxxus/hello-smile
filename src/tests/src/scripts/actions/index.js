import test from 'tape';
import mock from 'mock';
import * as TYPES from 'tests/fixtures/constants';

const before = test;
const after = test;
const actions = mock('scripts/actions', {
    'scripts/constants': TYPES
}, require);


before('description: Actions', t => {
    t.end();
});

test('actions', t => {

    let actual, expect;

    actual = actions.userName('Peter');
    expect = {
        type: TYPES.USER_NAME,
        payload: 'Peter'
    };
    t.deepEqual(actual, expect, 'action: name');

    actual = actions.changeView(TYPES.SHOW_SPLASH);
    expect = {
        type: TYPES.CHANGE_VIEW,
        payload: TYPES.SHOW_SPLASH
    };
    t.deepEqual(actual, expect, 'action: showSplash');

    t.end();

});

after('end test ---------------------------------------', t => {
    t.end();
});
