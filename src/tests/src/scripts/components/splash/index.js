import test from 'tape';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { keyDownArgs, styles } from 'tests/fixtures/components/splash';
import mock from 'mock';

const Splash = mock('scripts/components/splash', {
    'scripts/components/splash/splash.css': styles
}, require).default;

const $ = React.createElement;
const splash = Splash(React);
const before = test;
const after = test;

before('description: splash component', t => {
    t.end();
});

test('splash comp', t => {

    let actual, expect;

    actual = shallow($(splash)).children().length;
    expect = 2;
    t.equal(actual, expect, 'should render correctly');

    actual = shallow($(splash)).find('input').prop('placeholder');
    expect = 'your name';
    t.equal(actual, expect, 'input placeholder should be: your name');

    actual = shallow($(splash)).find('p').text();
    expect = 'fill the field with your name and press enter.';
    t.equal(actual, expect, 'message is defined');

    t.end();
});

test('show / hide view', t => {

    let props = {
        display: 'none'
    };

    let actual, expect;

    actual = shallow($(splash)).find('.splash').prop('style').display;
    expect = 'block';
    t.equal(actual, expect, 'display should be block');

    actual = shallow($(splash, props)).find('.splash').prop('style').display;
    expect = 'none';
    t.equal(actual, expect, 'display should be none');

    t.end();
});

test('keypress submit name', t => {

    let actual, expect;

    const callback = sinon.spy(),
        props = {
            callback: callback
        };

    shallow($(splash, props)).find('input').simulate('keydown', keyDownArgs);
    actual = callback.calledOnce;
    expect = true;
    t.equal(actual, expect, 'keydown event was called once');

    actual = callback.calledWith('Milena');
    expect = true;
    t.equal(actual, expect, 'event was called vith args');


    t.end();

});


after('end test ---------------------------------------', t => {
    t.end();
});
