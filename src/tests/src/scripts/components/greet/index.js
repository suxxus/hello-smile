import test from 'tape';
import React from 'react';
import sinon from 'sinon';
import mock from 'mock';
import { shallow } from 'enzyme';
import { styles } from 'tests/fixtures/components/greet';

const Greet = mock('scripts/components/greet', {
    'scripts/components/greet/greet.css': styles
}, require).default;

const $ = React.createElement;
const greet = Greet(React);
const before = test;
const after = test;

before('description: greet component', t => {
    t.end();
});

test('greet comp', t => {

    const actual = shallow($(greet)).children().length,
        expect = 2;
    t.equal(actual, expect, 'should render correctly');

    t.end();
});

test('user name', t => {

    const props = {
            name: 'Peter'
        },
        actual = shallow($(greet, props)).find('h1').text(),
        expect = 'Hello Peter!';

        t.equal(actual, expect, 'name should be Peter');
    t.end();
});

test('click Event', t => {

    const callback = sinon.spy(),
        props = {
            callback: callback
        };

    shallow($(greet, props)).find('button').simulate('click');
    const actual = callback.calledOnce,
        expect = true;

    t.equal(actual, expect, 'click event was called once');
    t.end();

});

after('end test ---------------------------------------', t => {
    t.end();
});
