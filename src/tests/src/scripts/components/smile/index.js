import test from 'tape';
import React from 'react';
import mock from 'mock';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { styles } from 'tests/fixtures/components/smile/index.js';

const Smile = mock('scripts/components/smile', {
    'scripts/components/smile/smile.css': styles
}, require).default;

const $ = React.createElement;
const smile = Smile(React);
const before = test;
const after = test;

before('description: smile component', t => {
    t.end();
});

test('smile comp', t => {

    const actual = shallow($(smile)).children().length,
        expect = 3;
    t.equal(actual, expect, 'should render correctly');

    t.end();
});

test('name', t => {

    const props = {
        name: 'Augusto'
    };

    const actual = shallow($(smile, props)).find('h1').text(),
        expect = 'Hello Augusto!';
    t.equal(actual, expect, 'should render correctly');

    t.end();
});

test('click Event', t => {

    const callback = sinon.spy(),
        props = {
            callback: callback,
        };

    shallow($(smile, props)).find('.reload').simulate('click');
    const actual = callback.calledOnce,
        expect = true;

    t.equal(actual, expect, 'click event was called once');
    t.end();

});

after('end test ---------------------------------------', t => {
    t.end();
});
