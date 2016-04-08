import test from 'tape';
import * as TYPES from 'scripts/constants';

const before = test;
const after = test;

before('description: Constants', t => {
    t.end();
});

test('types', t => {

    let actual, expect;

    actual = TYPES.USER_NAME;
    expect = 'user.name';
    t.equal(actual, expect, 'type USER_NAME is defined');

    actual = TYPES.SHOW_SPLASH;
    expect = 'splash';
    t.equal(actual, expect, 'type SHOW_SPLASH is defined');

    actual = TYPES.SHOW_GREET;
    expect = 'greet';
    t.equal(actual, expect, 'type SHOW_GREET is defined');

    actual = TYPES.SHOW_SMILE;
    expect = 'smile';
    t.equal(actual, expect, 'type SHOW_SMILE is defined');


    actual = TYPES.CHANGE_VIEW;
    expect = 'change.view';
    t.equal(actual, expect, 'type CHANGE_VIEW is defined');

    t.end();

});

after('end test ---------------------------------------', t => {
    t.end();
});
