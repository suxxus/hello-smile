import test from 'tape';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { keyDownArgs, styles } from 'tests/fixtures/components/splash';
import mock from 'mock';

const splash = mock('scripts/components/splash', {
    'scripts/components/splash/splash.css': styles
}, require).default;

const $ = React.createElement;
const before = test;
const after = test;
const callback = sinon.spy();
let Splash;

before('description: splash component', t => {
    const props = {
        callback,
        name: 'Peter',
        display: 'block'
    };
    Splash = $(splash, props);
    t.end();
});

test('splash comp', t => {

    let actual, expect, msg;

    msg = 'has component class hello';

    actual = shallow(Splash).hasClass('splash');
    expect = true;

    t.equal(actual, expect, msg);

    t.end();
});

test('enter key was pressed', t => {
    shallow(Splash).find('input').simulate('keydown', keyDownArgs);
    const actual = callback.calledOnce,
        expect = true;
    t.ok(actual, expect);

    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
